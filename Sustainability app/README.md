# Clean Shores UAE

Multilingual public website about beach cleanups and environmental action in the UAE.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open:

```text
http://localhost:3000
```

## What the backend does

- serves the website files
- provides `GET /api/posts?lang=en|ru|ar`
- provides `POST /api/posts`
- stores posts in `data/posts.json`
- stores uploaded files in `uploads/`

## Post fields

- `lang`
- `author`
- `type`
- `location`
- `message`
- `mediaLink`
- `mediaFile`

## Good next production steps

- move post storage from JSON to PostgreSQL or Supabase
- store media in S3, Cloudinary or Supabase Storage
- add moderation and spam protection
- deploy to Railway, Render, Vercel + separate API, or a VPS
