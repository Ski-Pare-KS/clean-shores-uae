const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const ffmpeg = require("ffmpeg-static");

const videoInput = path.resolve("assets", "hero-video-web.mp4");
const audioInput = path.resolve("assets", "hero-music.mp3");
const output = path.resolve("assets", "hero-video-web-music.mp4");

if (!fs.existsSync(videoInput)) {
  console.error(`Video not found: ${videoInput}`);
  process.exit(1);
}

if (!fs.existsSync(audioInput)) {
  console.error(`Audio not found: ${audioInput}`);
  process.exit(1);
}

const result = spawnSync(
  ffmpeg,
  [
    "-y",
    "-i",
    videoInput,
    "-stream_loop",
    "-1",
    "-i",
    audioInput,
    "-map",
    "0:v:0",
    "-map",
    "1:a:0",
    "-c:v",
    "copy",
    "-c:a",
    "aac",
    "-b:a",
    "160k",
    "-shortest",
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
