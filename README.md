Got it — from your screenshot, it looks like:

* The GitHub README is **rendering markdown literally** (e.g. triple backticks visible)
* The link isn’t clickable in an attractive way
* The formatting doesn't feel polished or readable

Let me fix that for you.

---

## ✅ Updated and Polished `README.md` (GitHub-Friendly)

````markdown
# 📝 Notive

**Notive** is a minimal, distraction-free note-taking app built with **Next.js**, **Tailwind CSS**, **MongoDB**, **shadcn/ui**, and **Framer Motion**.  
It helps you quickly jot down thoughts with a fast, elegant, and responsive UI.

🔗 **Live Demo**: [notive-active-notes.vercel.app]
(https://notive-active-notes.vercel.app)

---

## ✨ Features

- 🧠 Minimal & distraction-free interface
- 💾 Auto-save notes by device ID
- 🌗 Dark mode support
- 🎨 Built with shadcn/ui components
- 🌀 Framer Motion for smooth animations
- 📱 Mobile-friendly and responsive
- ⚡ Powered by Next.js App Router

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Database**: MongoDB via Mongoose
- **API**: RESTful API with API Routes

---

## 📦 Installation

```bash
git clone https://github.com/CwPranay/Notive-Full-Stack.git
cd Notive-Full-Stack
npm install
````

---

## ⚙️ Environment Setup

Create a `.env.local` file in the root:

```env
MONGODB_URL=your_mongodb_connection_string
```

---

## 🧱 Run Locally

```bash
npm run dev
```

App runs locally at: [http://localhost:3000](http://localhost:3000)

---

## 📦 Dependencies

Be sure these packages are installed:

```bash
npm install @shadcn/ui framer-motion lucide-react class-variance-authority tailwind-merge
```

To initialize `shadcn/ui` (if not already):

```bash
npx shadcn-ui@latest init
```

---

## 📁 Folder Structure

```
/app
/components
  ├─ homepage.tsx
  ├─ notes.tsx
/lib
/models
  └─ Note.ts
/pages
  └─ api/notes.ts
/public
/styles
```

---

## 📸 Screenshot

<!-- Replace with a real image -->

![Notive Preview]
(./public/notive-preview.png)

---

## 🔮 Upcoming Features

* 🔍 Search and tag notes
* 🧾 Markdown support
* 📲 PWA offline access
* 🧠 AI-powered note summaries
* 🔐 Optional user login

---

## 👤 Author

Made with ❤️ by [Pranay Gurav](https://github.com/CwPranay)

---

## 📜 License

[MIT License](LICENSE)

---

## 🙌 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [MongoDB](https://www.mongodb.com/)

```

---