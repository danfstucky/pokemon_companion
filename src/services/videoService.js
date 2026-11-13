// Chooses which encode of a video to download: the lightest file this device plays well that still
// looks sharp at the size it is shown. Candidates are { src, video, audio, width, height, bitrate }
// objects, ordered lightest first, with a universally supported encode last.

/** How far an encode may be stretched past its native width before it starts to look soft. */
const UPSCALE_TOLERANCE = 1.15;

/** MIME type with codecs, e.g. `video/mp4; codecs="av01.0.05M.08, opus"`. */
export function mimeType(candidate, withAudio = true) {
  const codecs = withAudio ? `${candidate.video}, ${candidate.audio}` : candidate.video;
  return `video/mp4; codecs="${codecs}"`;
}

/**
 * The lightest playable candidate that is wide enough for `renderWidth` device pixels. When none is,
 * the lightest of the widest playable ones. When nothing is playable, the last (universal) entry.
 */
export function pickSource(candidates, renderWidth, isPlayable) {
  const playable = candidates.filter(isPlayable);
  if (playable.length === 0) return candidates[candidates.length - 1];
  const sharp = playable.find((c) => c.width * UPSCALE_TOLERANCE >= renderWidth);
  if (sharp) return sharp;
  const widest = Math.max(...playable.map((c) => c.width));
  return playable.find((c) => c.width === widest);
}

const codecFamily = (candidate) => candidate.video.split('.')[0];

/**
 * The safe choice: among encodes in the universally supported codec (the last entry's, i.e. H.264),
 * the lightest one that is sharp enough. Used before probing finishes, when probing rejects every
 * file, and when a file fails to load.
 */
export function fallbackSource(candidates, renderWidth) {
  const universal = codecFamily(candidates[candidates.length - 1]);
  return pickSource(
    candidates.filter((c) => codecFamily(c) === universal),
    renderWidth,
    () => true
  );
}

let probe;
/** Synchronous check: can this browser decode the file (video and audio track) at all? */
export function canPlay(candidate) {
  probe ??= document.createElement('video');
  return probe.canPlayType(mimeType(candidate)) !== '';
}

/**
 * Can this device play the file smoothly without needlessly draining a battery? MediaCapabilities
 * answers for the file's real resolution and bitrate. Software decoding (not power efficient) is
 * accepted on desktops, where it is cheap at these sizes, but not on phones and tablets: there the
 * lighter AV1 file is only worth it when the device has a hardware decoder for it.
 */
export async function playsWell(candidate, { framerate, finePointer }) {
  if (!canPlay(candidate)) return false;
  const capabilities = typeof navigator !== 'undefined' ? navigator.mediaCapabilities : undefined;
  if (!capabilities?.decodingInfo) return true;
  try {
    const info = await capabilities.decodingInfo({
      type: 'file',
      video: {
        contentType: mimeType(candidate, false),
        width: candidate.width,
        height: candidate.height,
        bitrate: candidate.bitrate,
        framerate,
      },
    });
    return info.supported && info.smooth && (info.powerEfficient || finePointer);
  } catch {
    // Some browsers reject configurations they cannot describe; canPlayType already said yes.
    return true;
  }
}

/** Resolves the candidate to load for a frame `renderWidth` device pixels wide. */
export async function chooseSource(candidates, { renderWidth, framerate, finePointer }) {
  const verdicts = await Promise.all(candidates.map((c) => playsWell(c, { framerate, finePointer })));
  if (!verdicts.some(Boolean)) return fallbackSource(candidates, renderWidth);
  return pickSource(candidates, renderWidth, (_, i) => verdicts[i]);
}
