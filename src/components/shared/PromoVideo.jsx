import { useEffect, useRef, useState } from 'react';
import { chooseSource, fallbackSource } from '../../services/videoService';
import styles from './PromoVideo.module.scss';

/** Visitors who asked for less motion or less data get the poster and a play button instead of autoplay. */
function prefersQuiet() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.connection?.saveData === true;
}

function fullscreenElement() {
  return document.fullscreenElement ?? document.webkitFullscreenElement ?? null;
}

/** Element fullscreen where the browser has it; iPhone only offers its native video player. */
function supportsFullscreen() {
  if (typeof document === 'undefined') return false;
  return Boolean(
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    (typeof HTMLVideoElement !== 'undefined' && 'webkitEnterFullscreen' in HTMLVideoElement.prototype)
  );
}

/**
 * A muted, looping promo reel that costs the page nothing up front. Only a small poster loads with the
 * page; the video's source is set once the page has finished loading and the frame nears the viewport.
 * It then plays only while visible and pauses offscreen.
 *
 * `reel.sources` holds a `wide` and a `tall` cut, each a list of encodes (see videoService). The frame's
 * shape follows `wideQuery`, and the encode is the lightest one this device decodes well that is
 * still sharp at the frame's size in device pixels.
 */
export default function PromoVideo({ reel, wideQuery, label, describedBy }) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const toggleRef = useRef(null);
  // Set when the centre Play button is pressed: it unmounts, so focus moves to the control that replaces it.
  const focusToggle = useRef(false);
  // Best file for the current orientation; filled synchronously, then refined by the async probe.
  const choiceRef = useRef(null);
  // 'pending' until the frame nears the viewport; 'manual' shows the play button instead of autoplaying.
  const [mode, setMode] = useState('pending');
  const [src, setSrc] = useState(null);
  const [wantsPlay, setWantsPlay] = useState(false);
  const [inView, setInView] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);
  // Every file failed to load or decode: show the poster alone rather than controls that do nothing.
  const [failed, setFailed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [canFullscreen] = useState(supportsFullscreen);

  const orientation = () => (window.matchMedia(wideQuery).matches ? 'wide' : 'tall');
  /** The frame's width in device pixels: how sharp the file needs to be. */
  const renderWidth = () => (frameRef.current?.clientWidth || window.innerWidth) * (window.devicePixelRatio || 1);
  /** The H.264 file for the current frame: plays everywhere. */
  const fallbackSrc = () => fallbackSource(reel.sources[orientation()], renderWidth()).src;

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;
    // Very old browsers and some embedded WebViews: no lazy loading, just a play button.
    if (typeof IntersectionObserver === 'undefined') {
      setMode('manual');
      return undefined;
    }
    let alive = true;
    let latest = 0;
    let choice = null;
    const quiet = prefersQuiet();

    /**
     * Picks the file for the current orientation and frame size. A choice superseded by a newer one
     * (the screen crossed the breakpoint mid-probe) resolves to that newer choice, so whoever is
     * waiting on it still gets a file. Resolves null only after unmount.
     */
    const resolveChoice = () => {
      const id = ++latest;
      const list = reel.sources[orientation()];
      const width = renderWidth();
      // Until probing finishes, a click gets the H.264 file: safe to decode on any device.
      choiceRef.current = fallbackSource(list, width).src;
      return chooseSource(list, {
        renderWidth: width,
        framerate: reel.framerate,
        finePointer: window.matchMedia('(pointer: fine)').matches,
      }).then((picked) => {
        if (!alive) return null;
        if (id !== latest) return choice;
        choiceRef.current = picked.src;
        return picked.src;
      });
    };

    const start = () =>
      choice.then((picked) => {
        if (!picked) return;
        setSrc(picked);
        setWantsPlay(true);
      });

    const near = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        near.disconnect();
        choice = resolveChoice();
        setMode(quiet ? 'manual' : 'auto');
        if (quiet) return;
        // The reel must never compete with the page's own resources: wait for the load event.
        if (document.readyState === 'complete') start();
        else window.addEventListener('load', start, { once: true });
      },
      { rootMargin: '300px 0px' }
    );
    const seen = new IntersectionObserver((entries) => setInView(entries.some((e) => e.isIntersecting)), {
      threshold: 0.25,
    });
    near.observe(frame);
    seen.observe(frame);

    // Rotating a tablet or resizing across the breakpoint swaps to the cut that fits the new frame.
    const mq = window.matchMedia(wideQuery);
    const onChange = () => {
      if (!choice) return; // not near the viewport yet: the first choice will read the new orientation
      choice = resolveChoice();
      // The new file starts from scratch: let the matching poster cover the gap until it plays.
      setStarted(false);
      setFailed(false);
      choice.then((picked) => picked && setSrc((current) => (current ? picked : current)));
    };
    mq.addEventListener('change', onChange);

    return () => {
      alive = false;
      near.disconnect();
      seen.disconnect();
      window.removeEventListener('load', start);
      mq.removeEventListener('change', onChange);
    };
    // Mount-only on purpose: the reel and query are static, and re-running would redo the lazy load.
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    if (wantsPlay && (inView || fullscreen)) {
      video.muted = muted;
      video.play()?.catch((err) => {
        // Autoplay refused (e.g. iOS Low Power Mode): fall back to the play button.
        // An AbortError only means a pause() or a new source interrupted this play().
        if (err?.name !== 'NotAllowedError') return;
        setWantsPlay(false);
        setMode('manual');
      });
    } else {
      video.pause();
    }
  }, [src, wantsPlay, inView, muted, fullscreen]);

  const togglePlay = () => {
    if (wantsPlay) {
      setWantsPlay(false);
      return;
    }
    setSrc((current) => current ?? choiceRef.current ?? fallbackSrc());
    setInView(true); // the visitor is looking at it: they just pressed play
    setWantsPlay(true);
  };

  /** Back to the start, and playing: a paused visitor pressing restart wants to watch it again. */
  const restart = () => {
    if (videoRef.current) videoRef.current.currentTime = 0;
    setInView(true);
    setWantsPlay(true);
  };

  const toggleMute = () => {
    const next = !muted;
    // Set directly as well: unmuting inside the click keeps the user gesture browsers require.
    if (videoRef.current) videoRef.current.muted = next;
    setMuted(next);
  };

  const toggleFullscreen = () => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (fullscreenElement()) {
      // Rejects if fullscreen already ended (e.g. Esc in the same frame): nothing left to do.
      (document.exitFullscreen ?? document.webkitExitFullscreen)?.call(document)?.catch?.(() => {});
      return;
    }
    const request = frame?.requestFullscreen ?? frame?.webkitRequestFullscreen;
    if (request && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) {
      request.call(frame)?.catch?.(() => {});
      return;
    }
    try {
      video?.webkitEnterFullscreen?.(); // iPhone: the native player, which brings its own controls
    } catch {
      // Not ready yet (no metadata): nothing to show fullscreen.
    }
  };

  const handleError = () => {
    // A file the browser claimed it could decode but could not (or a network failure): retry once
    // with the H.264 encode, which plays everywhere.
    const fallback = fallbackSrc();
    if (src && src !== fallback) {
      setStarted(false); // the poster covers the gap until the fallback file plays
      setSrc(fallback);
      return;
    }
    setFailed(true);
    setWantsPlay(false);
    setStarted(false);
  };

  useEffect(() => {
    const onChange = () => setFullscreen(fullscreenElement() === frameRef.current);
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    // iOS may pause when its native player closes: mirror whatever state it was left in.
    const video = videoRef.current;
    const onNativeExit = () => setWantsPlay(!video.paused);
    video?.addEventListener('webkitendfullscreen', onNativeExit);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
      video?.removeEventListener('webkitendfullscreen', onNativeExit);
    };
  }, []);

  // Progress bar: written straight to the DOM each frame while playing, so it never re-renders React.
  useEffect(() => {
    const video = videoRef.current;
    const bar = barRef.current;
    if (!video || !bar) return undefined;
    let frame = 0;
    const draw = () => {
      bar.style.transform = `scaleX(${video.duration ? video.currentTime / video.duration : 0})`;
    };
    const tick = () => {
      draw();
      frame = requestAnimationFrame(tick);
    };
    const begin = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      draw();
    };
    video.addEventListener('playing', begin);
    video.addEventListener('pause', stop);
    video.addEventListener('seeked', draw); // restart while paused
    video.addEventListener('emptied', stop); // a source swap restarts from zero
    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener('playing', begin);
      video.removeEventListener('pause', stop);
      video.removeEventListener('seeked', draw);
      video.removeEventListener('emptied', stop);
    };
  }, []);

  const showPlayButton = !failed && mode === 'manual' && !wantsPlay && !started;
  const showControls = !failed && src !== null && !showPlayButton;

  useEffect(() => {
    if (!showControls || !focusToggle.current) return;
    focusToggle.current = false;
    toggleRef.current?.focus();
  }, [showControls]);

  const frameClass = [styles.frame, fullscreen && styles.fullscreen].filter(Boolean).join(' ');

  return (
    <div ref={frameRef} className={frameClass}>
      <video
        ref={videoRef}
        className={styles.video}
        src={src ?? undefined}
        aria-label={label}
        aria-describedby={describedBy}
        // Buffer only while on screen: a visitor who scrolls past before the page loads fetches
        // just the file's header, not the whole reel.
        preload={src ? (inView || fullscreen ? 'auto' : 'metadata') : 'none'}
        loop
        // No `muted` prop: React sets it as a property only. The play effect sets it before play().
        playsInline
        disablePictureInPicture
        onPlaying={() => setStarted(true)}
        onError={handleError}
        onClick={showControls ? togglePlay : undefined}
      />
      <picture className={`${styles.poster} ${started ? styles.posterHidden : ''}`} aria-hidden="true">
        <source media={wideQuery} srcSet={reel.posters.wide} type="image/webp" />
        <img src={reel.posters.tall} alt="" decoding="async" fetchPriority="high" />
      </picture>

      <div
        className={`${styles.progress} ${started && !failed ? styles.progressVisible : ''}`}
        aria-hidden="true"
        data-testid="reel-progress"
      >
        <div ref={barRef} className={styles.progressFill} style={{ transform: 'scaleX(0)' }} />
      </div>

      {showPlayButton && (
        <button
          type="button"
          className={styles.bigPlay}
          onClick={() => {
            focusToggle.current = true;
            togglePlay();
          }}
          aria-label="Play video"
        >
          <i className="fas fa-play" aria-hidden="true" />
        </button>
      )}

      {showControls && (
        <div className={styles.controls}>
          <button
            ref={toggleRef}
            type="button"
            className={styles.control}
            onClick={togglePlay}
            aria-label={wantsPlay ? 'Pause video' : 'Play video'}
          >
            <i className={`fas ${wantsPlay ? 'fa-pause' : 'fa-play'}`} aria-hidden="true" />
          </button>
          <button type="button" className={styles.control} onClick={restart} aria-label="Restart video">
            <i className="fas fa-undo-alt" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.control}
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            <i className={`fas ${muted ? 'fa-volume-mute' : 'fa-volume-up'}`} aria-hidden="true" />
          </button>
          {canFullscreen && (
            <button
              type="button"
              className={styles.control}
              onClick={toggleFullscreen}
              aria-label={fullscreen ? 'Exit full screen' : 'Full screen'}
            >
              <i className={`fas ${fullscreen ? 'fa-compress' : 'fa-expand'}`} aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
