# Clean Shores UAE 🌊

A multilingual, community-driven public web platform dedicated to beach cleanups, coastal conservation, and environmental participation across the United Arab Emirates.

---

## 🌟 Key Features

- **Trilingual Interface**: Complete English, Russian, and Arabic (`RTL`) language support with instant switching.
- **Media Showcase**: Hero video with audio track, photo carousel, and event highlights from community cleanup days.
- **Recommended Cleanup Spots**: Curated coastal spots across Dubai, Abu Dhabi, Sharjah, and Ajman.
- **Interactive Community Wall**: Visitors can submit cleanup recommendations, share stories, and upload photos/videos.
- **Hybrid Offline/Static Resilience**: Works both as a full-stack Node.js/Express application and as a purely static website (e.g., hosted on GitHub Pages) using local storage and bundled seed data.

---

## 🚀 Running Locally

### Option 1: Full-Stack Mode (Node.js)

```bash
cd "Sustainability app"
npm install
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Static Preview Mode (No Node.js Required)

You can simply open `Sustainability app/index.html` in any web browser, or serve it with Python:

```bash
python3 -m http.server 8000
```
Then visit [http://localhost:8000/Sustainability%20app/](http://localhost:8000/Sustainability%20app/).

---

## 🌐 Publishing Online via GitHub Pages

### 1. Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (for example: `clean-shores-uae` or `eco-project`).
3. Leave it Public and do **not** check "Add a README" or ".gitignore" (we already configured them).
4. Click **Create repository**.

### 2. Push Your Code to GitHub
Run the following commands in your terminal:

```bash
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. In your GitHub repository, click **Settings** > **Pages** (in the left sidebar).
2. Under **Build and deployment**:
   - **Method A (Automated Workflow - Recommended)**: Under **Source**, choose **GitHub Actions**. The included `.github/workflows/deploy.yml` will automatically build and publish the site!
   - **Method B (Direct Branch)**: Under **Source**, choose **Deploy from a branch**, select branch **`main`** and folder **`/ (root)`**, then click **Save**.
3. Within 1–2 minutes, your site will be live at:
   `https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

## 📑 Embedding in Google Sites

If you want to display this site within a Google Site:

1. Open your site on [sites.google.com](https://sites.google.com).
2. In the right panel, click **Insert** > **Embed** (`<>`).
3. Select the **By URL** tab.
4. Paste your live GitHub Pages URL (e.g., `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`).
5. Choose **Whole page** and click **Insert**.
6. Resize the embedded frame to fill the desired width and height.

---

## 📁 Project Structure

```text
ECO_project/
├── .github/workflows/deploy.yml   # Automatic GitHub Pages deployment
├── index.html                      # Root redirect for GitHub Pages branch deployments
├── .gitignore                      # Git ignore file (protects against node_modules and heavy files)
├── README.md                       # Project documentation & deployment guide
├── Images/                         # High-resolution original source media archive
└── Sustainability app/
    ├── index.html                  # Main application HTML
    ├── styles.css                  # Responsive styles, glassmorphism, RTL support
    ├── script.js                   # Multilingual state, carousel, and hybrid post feed
    ├── server.js                   # Node.js / Express backend
    ├── package.json                # Project dependencies and npm scripts
    ├── data/
    │   └── posts.json              # Initial seed posts (EN, RU, AR)
    ├── uploads/                    # Server-side user upload storage
    ├── assets/                     # Web-optimized images, audio, and videos (<35MB)
    └── scripts/                    # Media processing scripts
```

