// ComplianceWatch promo reel. The files live in public/video/compliancewatch/, so they are served
// as-is and never enter the JS bundle; only the one encode a visitor needs is ever downloaded.
//
// Each list is ordered lightest file first. The last entry of each list must be H.264 + AAC: it
// plays everywhere and is the fallback when nothing better is supported or a file fails to decode.
// Codec strings and bitrates were read from the files themselves (avcC/av1C boxes, size / 25 s).

const BASE = `${import.meta.env.BASE_URL}video/compliancewatch/`;

/** Frames at least this wide (CSS px) get the landscape cut; narrower ones get the vertical cut. */
export const WIDE_QUERY = '(min-width: 576px)';

export const complianceWatchReel = {
  sources: {
    wide: [
      {
        src: `${BASE}reel-16x9-720p-av1.mp4`,
        video: 'av01.0.05M.08',
        audio: 'opus',
        width: 1280,
        height: 720,
        bitrate: 532000,
      },
      {
        src: `${BASE}reel-16x9-720p.mp4`,
        video: 'avc1.64001f',
        audio: 'mp4a.40.2',
        width: 1280,
        height: 720,
        bitrate: 662000,
      },
      {
        src: `${BASE}reel-16x9-1080p.mp4`,
        video: 'avc1.640032',
        audio: 'mp4a.40.2',
        width: 1920,
        height: 1080,
        bitrate: 1074000,
      },
    ],
    tall: [
      {
        src: `${BASE}reel-9x16-av1.mp4`,
        video: 'av01.0.05M.08',
        audio: 'opus',
        width: 720,
        height: 1280,
        bitrate: 614000,
      },
      {
        src: `${BASE}reel-9x16.mp4`,
        video: 'avc1.64001f',
        audio: 'mp4a.40.2',
        width: 720,
        height: 1280,
        bitrate: 800000,
      },
    ],
  },
  posters: {
    wide: `${BASE}poster-16x9.webp`,
    tall: `${BASE}poster-9x16.webp`,
  },
  framerate: 30,
};
