import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PromoVideo from '../../../src/components/shared/PromoVideo';

const reel = {
  sources: {
    wide: [
      { src: '/wide-av1.mp4', video: 'av01.0.05M.08', audio: 'opus', width: 1280, height: 720, bitrate: 532000 },
      { src: '/wide-1080.mp4', video: 'avc1.640032', audio: 'mp4a.40.2', width: 1920, height: 1080, bitrate: 1074000 },
    ],
    tall: [
      { src: '/tall-av1.mp4', video: 'av01.0.05M.08', audio: 'opus', width: 720, height: 1280, bitrate: 614000 },
      { src: '/tall.mp4', video: 'avc1.64001f', audio: 'mp4a.40.2', width: 720, height: 1280, bitrate: 800000 },
    ],
  },
  posters: { wide: '/poster-wide.webp', tall: '/poster-tall.webp' },
  framerate: 30,
};
const WIDE = '(min-width: 576px)';

let observers;
let media; // query -> matches
let mqListeners;

class FakeIntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    observers.push(this);
  }
  observe() {}
  disconnect() {
    this.disconnected = true;
  }
  fire(isIntersecting) {
    act(() => this.callback([{ isIntersecting }]));
  }
}

const nearObserver = () => observers.find((o) => o.options?.rootMargin);
const seenObserver = () => observers.find((o) => o.options?.threshold !== undefined);
const video = () => document.querySelector('video');

function renderPlayer() {
  return render(<PromoVideo reel={reel} wideQuery={WIDE} label="Promo" describedBy="desc" />);
}

beforeEach(() => {
  observers = [];
  mqListeners = [];
  media = { [WIDE]: true, '(prefers-reduced-motion: reduce)': false, '(pointer: fine)': true };
  vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver);
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query) => ({
      get matches() {
        return media[query] ?? false;
      },
      addEventListener: (_, fn) => mqListeners.push(fn),
      removeEventListener: vi.fn(),
    }))
  );
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined);
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, 'canPlayType').mockReturnValue('probably');
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('PromoVideo', () => {
  it('loads nothing but the poster on mount', () => {
    renderPlayer();
    expect(video()).not.toHaveAttribute('src');
    expect(video()).toHaveAttribute('preload', 'none');
    expect(document.querySelector('picture source')).toHaveAttribute('srcset', '/poster-wide.webp');
    expect(document.querySelector('picture img')).toHaveAttribute('src', '/poster-tall.webp');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('labels the video and links its text alternative', () => {
    renderPlayer();
    expect(video()).toHaveAttribute('aria-label', 'Promo');
    expect(video()).toHaveAttribute('aria-describedby', 'desc');
    expect(video()).toHaveAttribute('playsinline');
  });

  it('sets the source once the frame nears the viewport, then plays muted while visible', async () => {
    renderPlayer();
    nearObserver().fire(true);
    seenObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src', '/wide-av1.mp4'));
    expect(nearObserver().disconnected).toBe(true);
    await waitFor(() => expect(HTMLMediaElement.prototype.play).toHaveBeenCalled());
    expect(video().muted).toBe(true);
    expect(screen.getByRole('button', { name: 'Pause video' })).toBeInTheDocument();
  });

  it('picks the vertical cut on narrow screens', async () => {
    media[WIDE] = false;
    renderPlayer();
    nearObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src', '/tall-av1.mp4'));
  });

  it('pauses when scrolled offscreen', async () => {
    renderPlayer();
    nearObserver().fire(true);
    seenObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src'));
    HTMLMediaElement.prototype.pause.mockClear();
    seenObserver().fire(false);
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
  });

  it('waits for a play click when the visitor prefers reduced motion', async () => {
    media['(prefers-reduced-motion: reduce)'] = true;
    renderPlayer();
    nearObserver().fire(true);
    const play = await screen.findByRole('button', { name: 'Play video' });
    expect(video()).not.toHaveAttribute('src');

    await userEvent.click(play);
    expect(video()).toHaveAttribute('src', '/wide-av1.mp4');
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
    // The centre button is gone; focus lands on the control that replaced it.
    expect(screen.getByRole('button', { name: 'Pause video' })).toHaveFocus();
  });

  it('retries with the H.264 file when a file fails to decode, then gives up quietly', async () => {
    renderPlayer();
    nearObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src', '/wide-av1.mp4'));

    fireEvent.error(video());
    expect(video()).toHaveAttribute('src', '/wide-1080.mp4');

    fireEvent.error(video());
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('toggles sound and playback', async () => {
    renderPlayer();
    nearObserver().fire(true);
    seenObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src'));

    await userEvent.click(screen.getByRole('button', { name: 'Unmute video' }));
    expect(video().muted).toBe(false);
    expect(screen.getByRole('button', { name: 'Mute video' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Pause video' }));
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument();
  });

  it('hides the poster once the video is playing', async () => {
    renderPlayer();
    nearObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src'));
    const poster = document.querySelector('picture');
    const before = poster.className;
    fireEvent.playing(video());
    expect(poster.className).not.toBe(before);
  });

  it('still loads when the screen crosses the breakpoint before the first probe finishes', async () => {
    renderPlayer();
    nearObserver().fire(true); // probe #1 starts; the page is loaded, so autoplay waits on it
    media[WIDE] = false;
    act(() => mqListeners.forEach((fn) => fn())); // probe #2 supersedes it before it resolves
    await waitFor(() => expect(video()).toHaveAttribute('src', '/tall-av1.mp4'));
  });

  it('offers a play button when IntersectionObserver is unavailable', async () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    renderPlayer();
    await userEvent.click(screen.getByRole('button', { name: 'Play video' }));
    expect(video()).toHaveAttribute('src', '/wide-1080.mp4');
  });

  it('brings the poster back while a failed file is replaced mid-playback', async () => {
    renderPlayer();
    nearObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src', '/wide-av1.mp4'));
    const poster = document.querySelector('picture');
    const visibleClass = poster.className;
    fireEvent.playing(video());
    expect(poster.className).not.toBe(visibleClass);
    fireEvent.error(video());
    expect(poster.className).toBe(visibleClass);
  });

  it('buffers only while on screen', async () => {
    renderPlayer();
    nearObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src'));
    expect(video()).toHaveAttribute('preload', 'metadata');
    seenObserver().fire(true);
    expect(video()).toHaveAttribute('preload', 'auto');
  });

  it('swaps to the other cut when the screen crosses the breakpoint', async () => {
    renderPlayer();
    nearObserver().fire(true);
    await waitFor(() => expect(video()).toHaveAttribute('src', '/wide-av1.mp4'));
    media[WIDE] = false;
    act(() => mqListeners.forEach((fn) => fn()));
    await waitFor(() => expect(video()).toHaveAttribute('src', '/tall-av1.mp4'));
  });
});
