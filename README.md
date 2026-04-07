# Task Manager App — AI Comparison

This project compares two approaches to building the same application:

1. Vibe Coding using v0.dev
2. AI Pair Programming using GitHub Copilot

Both versions implement the exact same feature set and are deployed live.

---

## 🚀 Live Deployments

- Vibe version: http://localhost:3000/
- Pair version: http://localhost:5173/

---

## 📌 Features Implemented

Both versions include:

- Add a task with a title
- Mark a task as complete (toggle)
- Filter tasks:
  - All
  - Active
  - Completed
- Task count display ("X tasks remaining")
- Clean and functional UI

---

## ⚙️ Tools Used

- Vibe Version: v0.dev
- Pair Version: GitHub Copilot
- Deployment: Netlify / Vercel

---

## 📊 Comparison Table

| Dimension     | Vibe Version (v0.dev) | Pair Version (Copilot) | Verdict |
|---------------|----------------------|------------------------|---------|
| Speed         | Generated full app in ~8 minutes with a single prompt | Took ~30–40 minutes with manual coding and AI suggestions | Vibe faster |
| Control       | Limited control over structure and component design | Full control over file structure, logic, and components | Pair better |
| Code Quality  | Large auto-generated components and extra unused UI files | Clean modular components with focused logic | Pair better |
| Explainability| Some generated logic (hooks/components) was hard to understand | Easy to explain every function since code was written manually | Pair better |
| Editability   | Harder to modify due to scattered logic and large files | Easy to edit individual components and extend features | Pair better |

---

## 🧠 Key Observations

- The vibe tool generated a full **Next.js app with many extra UI components**, even though only a simple task manager was required.
- The pair version was much **simpler and more focused**, since only required features were implemented.
- The vibe version required **different deployment handling** due to Next.js structure.
- Copilot helped speed up repetitive code but still required decision-making and debugging.

---

## 🎯 When I Would Use Each Tool

**Vibe coding tool for:**  
Rapid prototyping and quick demos — because it generates a full working app in minutes with minimal effort.

**AI pair programming for:**  
Production-level or maintainable applications — because it provides full control, better structure, and easier debugging.

---

## 🎥 Demo Video

Google Drive Link: https://your-video-link

---

## 📂 Project Structure
