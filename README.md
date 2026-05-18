# Ensolvers Notes App - Full Stack Challenge

This is a professional Single Page Application (SPA) for note management, developed as part of the Ensolvers technical assessment.

## 🚀 Project Overview
The application allows users to create, edit, delete, and archive notes. It is built using a decoupled architecture with a Java Spring Boot backend and a React frontend.

## 🛠️ Tech Stack & Versions
- **Backend:** Java 17, Spring Boot 3, Maven, H2 Database (In-memory).
- **Frontend:** React, Vite, Axios, Lucide-React.
- **Node.js:** v22.7.0
- **npm:** 10.8.2

## 🏗️ Architecture
The backend follows a strict layer-based architecture as requested:
1. **Controllers:** REST API endpoints.
2. **Services:** Business logic layer.
3. **Repositories:** Data access layer using Spring Data JPA (ORM).

## 🏃 How to Run the Application

### Step 1: Start the Backend
1. Open a terminal in the `/backend` directory.
2. Run the following command:
   ```bash
   ./mvnw spring-boot:run
The API will be available at: http://localhost:8080

Step 2: Start the Frontend
Open a new terminal in the /frontend directory.

Install dependencies and run the development server:

Bash
npm install
npm run dev
The web app will be available at: http://localhost:5173

✅ Implemented Features (Phase 1)
[x] Create notes: Add new notes with title and content.

[x] Edit notes: Modify existing notes.

[x] Delete notes: Remove notes from the system.

[x] List active notes: View all non-archived notes.

[x] Archive/Unarchive: Toggle notes between active and archived states.

📄 Scripts
For Windows users, a run.bat file is included in the root directory to automate the startup of both services simultaneously.