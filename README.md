# 👁️ Freaky Archives

---

## Overview

Welcome to **Freaky Archives**, a full-stack forum application that aims to provide a community around documenting and discussing 
paranormal statements, unexplained phenomena, and the lingering dread of the unknown. The forum provides a centralized venue 
for users to contribute to a repository of user-made horror stories for everyone to access. Users can 
post their stories and interact with other users through comments and quoting parts of the discussion.

It is based on [Magnus Archives](https://rustyquill.com/show/the-magnus-archives/), an anthology podcast that tells stories of horror fiction.

Visit **Freaky Archives** on https://ccapdev-freaky-forum.onrender.com

---

## 📝 Features

### Community Engagement
- View, upvote or downvote posts, post comments under posts with a flexible quoting feature
- Make posts with a title, a summary, and a body for details and clarity
- Insert markdown text in the body to enhance the meaning behind each post
- Use pre-defined tags that are tied to the Magnus Archives franchise (The Entities/Fears)
> *<p align="center">"These things... these forces, they are our fear. Deep fears. Primordial. Always looking for ways to grow and spread."</p>*
> <p align="right">~ Gerard Keay, MAG 111 (Family Business)</p>

### Forum Organization
- A list of the latest posts are shown in the forum by default
- Hover over a post to show its post preview card
- Instantly filter by most/least upvoted, most/least viewed, and by oldest post date

### Searching System
- Shows a list of posts and users that match the given query
- Advanced operators/conditions while searching, such as:
  - Showing posts made by a specific author
  - Showing posts associated with one or more tags
  - Sorting posts by most/least viewed and most/least upvotes

### User Profiles
- Editable user profiles including biographies and usernames
- Post statistics per user
- Information on when the user joined and when they were last active

---

## 🛠️ Tech Stack & Version Metrics

### Frontend
*   **Vite v7.3.1** - Next-generation frontend build tooling.
*   **React v19.2.0** - Declarative UI library.
*   **Tailwind CSS v4.2.0** - Utility-first CSS framework.
*   **React Router v7.13.1** - Client-side routing and UI navigation.

### Backend
*   **Express v5.2.1** - API Routing framework for Node.js.
*   **Mongoose v9.2.3** - MongoDB object modeling for Node.js.
*   **Bcrypt v6.0.0** - Cryptographic password hashing.
*   **Connect-Mongo v6.0.0** - Persistent storage for Express session.
*   **Express-Session v1.19.0** - Server-side cookie session management.
*   **Dotenv v17.3.1** - Loading environment variables.

---

## 📦 Exact Dependency Manifest

### Frontend Production Dependencies (`/front`)
| Dependency | Version | Purpose |
| :--- | :--- | :--- |
| `react` | `^19.2.0` | Frontend UI state management. |
| `react-dom` | `^19.2.0` | Rendering components to the DOM. |
| `react-router-dom` | `^7.13.1` | Multi-view client-side routing. |
| `tailwindcss` | `^4.2.0` | Visual layout & styling engine. |
| `@tailwindcss/vite` | `^4.2.0` | Seamless Tailwind v4 compilation for Vite. |
| `react-markdown` | `^10.1.0` | Automated parsing of rich-text formatting tags. |
| `canvas-confetti` | `^1.9.4` | Particle effects upon successful statement archival. |
| `react-outside-click-handler` | `^1.3.0` | Handling state closure for UI dropdowns. |
| `react-swipeable` | `^7.0.2` | Mobile-friendly image gallery touch tracking. |

### Backend Production Dependencies (`/back`)
| Dependency | Version | Purpose |
| :--- | :--- | :--- |
| `express` | `^5.2.1` | Managing HTTP endpoints. |
| `mongoose` | `^9.2.3` | Structuring MongoDB Schema blueprints. |
| `bcrypt` | `^6.0.0` | User account encryption. |
| `connect-mongo` | `^6.0.0` | Storing session state inside MongoDB. |
| `express-session` | `^1.19.0` | Persistent server-side cookies. |
| `cors` | `^2.8.6` | Whitelisting cross-origin ports. |
| `dotenv` | `^17.3.1` | Preventing API secrets leaks. |

---

## 🚀 Local Setup Instructions

Follow these steps to run the Archives on your local machine.

### 1. Prerequisites
Ensure you have **Node.js** installed and that the following ports are free:
*   **Port 5173** (Frontend)
*   **Port 5000** (Backend)

### 2. Cloning the Repository
```bash
git clone https://github.com/Hatzious/CCAPDEV-Freaky-Forum.git
cd "Freaky Archives"
```

### 3. Database Configuration
1. Navigate to the `back` folder.
2. Create a file named `.env`.
3. Paste the following template and replace the placeholder with your own **MongoDB Atlas** connection string:
```text
MONGO_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=greateststrongestbbc
FRONTEND_URL=http://localhost:5173
PORT=5000
```

### 4. Installation
You must install dependencies for both the frontend and the backend separately.

**For Backend:**
```bash
cd "Freaky Archives/back"
npm install
```

**For Frontend:**
```bash
cd "Freaky Archives/front"
npm install
```

### 5. Running the Application
Open two separate terminals to run the services simultaneously.

**Terminal 1 (Backend):**
```bash
cd "Freaky Archives/back"
npm run greateststrongestbbc
```

**Terminal 2 (Frontend):**
```bash
cd "Freaky Archives/front"
npm run dev
```

The application will be accessible locally at **`http://localhost:5173`**.

---

## 📂 Project Architectural Design
The project uses the **Model-View-Controller (MVC)** architectural standard to ensure scalable cleanliness:
*   `models/`: Schema blueprints defining relational data shapes.
*   `controllers/`: Transaction handlers executing database mutations.
*   `routes/`: Interface portals bridging endpoints to controller modules.
*   `services/`: Shared operational utilities (e.g. transactional cascades like the `purger` service).

---

## ⚖️ Status
This repository is developed for educational academic purposes as part of the CCAPDEV MCO course. 

> *<p align="center">"Statement recorded. The Archive is now watching."</p>*