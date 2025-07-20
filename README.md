<div align="center">

  <br/>
  <h1 align="center">📝 Notive</h1>
  <p align="center">
    An app for actively capturing short notes and fleeting ideas.
    <br />
    <a href="https://notive-active-notes.vercel.app/" target="_blank"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CwPranay/Notive-Full-Stack/issues">Report Bug</a>
    ·
    <a href="https://github.com/CwPranay/Notive-Full-Stack/issues">Request Feature</a>
  </p>
</div>


---

<p align="center">
  <a href="https://notive-active-notes.vercel.app/" target="_blank">
    <img src="./public/notive-preview.png" alt="Notive App Preview" width="80%">
  </a>
</p>

---

## ✨ About The Project

**Notive** is built for **active note-taking**—the process of quickly jotting down short-form ideas, tasks, and reminders the moment they strike. It was born from the need for a simple and beautiful tool that prioritizes speed over feature bloat, helping you capture thoughts before they disappear.

### Key Features

* ✅ **Minimal & Distraction-Free UI**: A clean canvas for your ideas.
* 💾 **Seamless Auto-Save**: Notes are saved instantly by device ID.
* 🌗 **Gorgeous Dark Mode**: Easy on the eyes, day or night.
* 🎨 **Modern Component Library**: Built with the popular **shadcn/ui**.
* 🌀 **Fluid Animations**: Smooth transitions powered by **Framer Motion**.
* 📱 **Fully Responsive**: Perfect for desktop, tablet, and mobile.
* ⚡ **Blazing Fast**: Built on the **Next.js App Router**.

---

## 🛠️ Built With

This project showcases a modern full-stack TypeScript architecture.

| Tech         | Description                               |
|--------------|-------------------------------------------|
| **Frontend** | Next.js, React, Tailwind CSS, shadcn/ui   |
| **Animation**| Framer Motion                             |
| **Backend** | Next.js API Routes (RESTful)              |
| **Database** | MongoDB with Mongoose ORM                 |
| **Deployment**| Vercel                                    |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v18.x or higher) and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/CwPranay/Notive-Full-Stack.git](https://github.com/CwPranay/Notive-Full-Stack.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Notive-Full-Stack
    ```

3.  **Install base NPM packages:**
    ```bash
    npm install
    ```

4.  **Install UI & Animation Dependencies:**
    ```bash
    npm install framer-motion lucide-react class-variance-authority tailwind-merge
    ```

5.  **Initialize `shadcn/ui`:**
    Run this command and follow the on-screen prompts.
    ```bash
    npx shadcn-ui@latest init
    ```

6.  **Set up your environment variables:**
    Create a `.env.local` file in the root of your project and add your MongoDB connection string.
    ```env
    # .env.local
    MONGODB_URL="your_mongodb_connection_string"
    ```

7.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result!

---

## 🔌 API Endpoints

The application uses the following RESTful API endpoints:

| Method   | Endpoint          | Description                                  |
|----------|-------------------|----------------------------------------------|
| `GET`    | `/api/notes`      | Fetches all notes for a given `deviceId`.    |
| `POST`   | `/api/notes`      | Creates a new note.                          |
| `PUT`    | `/api/notes/[id]` | Updates an existing note by its ID.          |
| `DELETE` | `/api/notes/[id]` | Deletes a note by its ID.                    |

---

## 🔮 Roadmap

We have exciting plans for the future of Notive!

-   [ ] 🔍 Search and Tagging System
-   [ ] 🧾 Full Markdown Support
-   [ ] 📲 PWA for Offline Access
-   [ ] 🔐 User Authentication (Email/Password & OAuth)
-   [ ] 🧠 AI-Powered Note Summaries

See the [open issues](https://github.com/CwPranay/Notive-Full-Stack/issues) for a full list of proposed features (and known issues).

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Pranay Gurav**

* **GitHub**: [@CwPranay](https://github.com/CwPranay)
* **Portfolio**: [pranay gurav](https://pranay-gurav.vercel.app/)

---

## 🙌 Acknowledgements

A special thank you to the creators and maintainers of these incredible tools that made Notive possible.

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [MongoDB](https://www.mongodb.com/)
* [Vercel](https://vercel.com/)
* [Lucide Icons](https://lucide.dev/)