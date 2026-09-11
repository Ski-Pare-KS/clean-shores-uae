const express = require("express");
const multer = require("multer");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const dataDir = path.join(__dirname, "data");
const uploadsDir = path.join(__dirname, "uploads");
const postsFile = path.join(dataDir, "posts.json");
const allowedLanguages = new Set(["en", "ru", "ar"]);
const allowedMimeTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "video/quicktime"
]);

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, uploadsDir),
  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const safeBase = path
      .basename(file.originalname, extension)
      .replace(/[^a-zA-Z0-9-_]/g, "-")
      .slice(0, 60);
    callback(null, `${Date.now()}-${safeBase}${extension}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (_req, file, callback) => {
    if (allowedMimeTypes.has(file.mimetype)) {
      callback(null, true);
      return;
    }

    callback(new Error("Only image and video uploads are allowed"));
  },
  limits: {
    fileSize: 150 * 1024 * 1024
  }
});

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadsDir));
app.use(express.static(__dirname));

function readPosts() {
  try {
    const raw = fs.readFileSync(postsFile, "utf8");
    return JSON.parse(raw);
  } catch {
    return { en: [], ru: [], ar: [] };
  }
}

function writePosts(posts) {
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2), "utf8");
}

function normalizeLanguage(value) {
  return allowedLanguages.has(value) ? value : "en";
}

function normalizeMediaLink(value) {
  if (!value) return "";

  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function getMediaType(media, uploadedFile) {
  if (uploadedFile) {
    return uploadedFile.mimetype.startsWith("video/") ? "video" : "image";
  }

  if (/\.(mp4|webm|mov)(\?.*)?$/i.test(media)) return "video";
  if (/\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(media)) return "image";
  return "link";
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, date: new Date().toISOString() });
});

app.get("/api/posts", (req, res) => {
  const lang = normalizeLanguage(req.query.lang);
  const posts = readPosts();
  res.json(posts[lang] || []);
});

app.post("/api/posts", upload.single("mediaFile"), (req, res) => {
  const lang = normalizeLanguage(req.body.lang);
  const author = String(req.body.author || "").trim();
  const type = String(req.body.type || "").trim();
  const location = String(req.body.location || "").trim();
  const message = String(req.body.message || "").trim();
  const mediaLink = normalizeMediaLink(String(req.body.mediaLink || "").trim());

  if (!author || !message) {
    return res.status(400).json({ error: "author and message are required" });
  }

  const media = req.file ? `/uploads/${req.file.filename}` : mediaLink;
  const mediaType = getMediaType(media, req.file);
  const posts = readPosts();

  const newPost = {
    id: crypto.randomUUID(),
    author,
    type,
    location,
    message,
    media,
    mediaType,
    createdAt: new Date().toISOString()
  };

  posts[lang] = Array.isArray(posts[lang]) ? posts[lang] : [];
  posts[lang].unshift(newPost);
  writePosts(posts);

  return res.status(201).json(newPost);
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ error: error.message });
  }

  if (error) {
    return res.status(400).json({ error: error.message || "Upload failed" });
  }

  return res.status(500).json({ error: "Unexpected server error" });
});

app.listen(port, () => {
  console.log(`Clean Shores UAE server running at http://localhost:${port}`);
});
