const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const ffmpeg = require("ffmpeg-static");

const input = path.resolve("..", "Images", "20260301_103221.mp4");
const output = path.resolve("assets", "hero-video-web.mp4");

fs.mkdirSync(path.dirname(output), { recursive: true });

const result = spawnSync(
  ffmpeg,
  [
    "-y",
    "-i",
    input,
    "-t",
    "12",
    "-vf",
    "scale=1280:-2",
    "-an",
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-crf",
    "30",
    "-movflags",
    "+faststart",
    output
  ],
  {
    stdio: "inherit"
  }
);

if (result.status !== 0) {
  process.exit(result.status || 1);
}
