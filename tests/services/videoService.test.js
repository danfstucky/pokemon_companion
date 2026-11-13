import { chooseSource, fallbackSource, mimeType, pickSource, playsWell } from '../../src/services/videoService';

const av1 = { src: 'av1-720.mp4', video: 'av01.0.05M.08', audio: 'opus', width: 1280, height: 720, bitrate: 532000 };
const h264 = {
  src: 'h264-720.mp4',
  video: 'avc1.64001f',
  audio: 'mp4a.40.2',
  width: 1280,
  height: 720,
  bitrate: 662000,
};
const h264Hd = {
  src: 'h264-1080.mp4',
  video: 'avc1.640032',
  audio: 'mp4a.40.2',
  width: 1920,
  height: 1080,
  bitrate: 1074000,
};
const wide = [av1, h264, h264Hd];
const tallAv1 = { ...av1, src: 'tall-av1.mp4', width: 720, height: 1280 };
const tallH264 = { ...h264, src: 'tall-h264.mp4', width: 720, height: 1280 };
const tall = [tallAv1, tallH264];

const all = () => true;
const noAv1 = (c) => !c.video.startsWith('av01');

describe('mimeType', () => {
  it('includes the video and audio codecs by default', () => {
    expect(mimeType(av1)).toBe('video/mp4; codecs="av01.0.05M.08, opus"');
  });

  it('can omit the audio codec', () => {
    expect(mimeType(h264, false)).toBe('video/mp4; codecs="avc1.64001f"');
  });
});

describe('pickSource', () => {
  it('picks the lightest playable file that is sharp enough', () => {
    expect(pickSource(wide, 1050, all)).toBe(av1);
  });

  it('skips files the device cannot play', () => {
    expect(pickSource(wide, 1050, noAv1)).toBe(h264);
  });

  it('allows a small upscale before stepping up a size', () => {
    expect(pickSource(wide, 1280 * 1.15, all)).toBe(av1);
    expect(pickSource(wide, 1280 * 1.15 + 1, all)).toBe(h264Hd);
  });

  it('picks the high-resolution file for large or high-density frames', () => {
    expect(pickSource(wide, 2100, all)).toBe(h264Hd);
  });

  it('prefers the lightest of the widest files when none is wide enough', () => {
    // A 360px-wide frame at 3x density wants 1080 device pixels; both tall files are 720 wide.
    expect(pickSource(tall, 1080, all)).toBe(tallAv1);
    expect(pickSource(tall, 1080, noAv1)).toBe(tallH264);
  });

  it('falls back to the last (universal) entry when nothing reports playable', () => {
    expect(pickSource(wide, 800, () => false)).toBe(h264Hd);
  });
});

describe('playsWell / chooseSource', () => {
  let canPlayType;
  const decodingInfo = vi.fn();

  beforeEach(() => {
    canPlayType = vi.spyOn(HTMLMediaElement.prototype, 'canPlayType').mockReturnValue('probably');
    decodingInfo.mockReset();
    Object.defineProperty(navigator, 'mediaCapabilities', { value: { decodingInfo }, configurable: true });
  });

  afterEach(() => {
    canPlayType.mockRestore();
    delete navigator.mediaCapabilities;
  });

  const ctx = { framerate: 30, finePointer: false };

  it('rejects a file the browser cannot decode without asking MediaCapabilities', async () => {
    canPlayType.mockReturnValue('');
    await expect(playsWell(av1, ctx)).resolves.toBe(false);
    expect(decodingInfo).not.toHaveBeenCalled();
  });

  it('describes the real file to MediaCapabilities', async () => {
    decodingInfo.mockResolvedValue({ supported: true, smooth: true, powerEfficient: true });
    await expect(playsWell(av1, ctx)).resolves.toBe(true);
    expect(decodingInfo).toHaveBeenCalledWith({
      type: 'file',
      video: {
        contentType: 'video/mp4; codecs="av01.0.05M.08"',
        width: 1280,
        height: 720,
        bitrate: 532000,
        framerate: 30,
      },
    });
  });

  it('accepts software decoding on desktops but not on touch devices', async () => {
    decodingInfo.mockResolvedValue({ supported: true, smooth: true, powerEfficient: false });
    await expect(playsWell(av1, { framerate: 30, finePointer: true })).resolves.toBe(true);
    await expect(playsWell(av1, { framerate: 30, finePointer: false })).resolves.toBe(false);
  });

  it('trusts canPlayType when MediaCapabilities is missing or throws', async () => {
    delete navigator.mediaCapabilities;
    await expect(playsWell(av1, ctx)).resolves.toBe(true);
    Object.defineProperty(navigator, 'mediaCapabilities', { value: { decodingInfo }, configurable: true });
    decodingInfo.mockRejectedValue(new TypeError('unsupported config'));
    await expect(playsWell(av1, ctx)).resolves.toBe(true);
  });

  it('uses H.264 on a phone without an AV1 hardware decoder', async () => {
    decodingInfo.mockImplementation(async ({ video }) => ({
      supported: true,
      smooth: true,
      powerEfficient: !video.contentType.includes('av01'),
    }));
    await expect(chooseSource(tall, { renderWidth: 1080, ...ctx })).resolves.toBe(tallH264);
  });

  it('falls back to the right-sized H.264 file when every file is judged a poor fit', async () => {
    decodingInfo.mockResolvedValue({ supported: true, smooth: false, powerEfficient: false });
    await expect(chooseSource(wide, { renderWidth: 1000, ...ctx })).resolves.toBe(h264);
    await expect(chooseSource(tall, { renderWidth: 1000, ...ctx })).resolves.toBe(tallH264);
  });
});

describe('fallbackSource', () => {
  it('only considers the universal codec, sized for the frame', () => {
    expect(fallbackSource(wide, 1000)).toBe(h264);
    expect(fallbackSource(wide, 2000)).toBe(h264Hd);
    expect(fallbackSource(tall, 1080)).toBe(tallH264);
  });
});
