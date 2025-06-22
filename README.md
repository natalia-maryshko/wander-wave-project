# 🌍 Wander Wave

**Wander Wave** is a social platform designed for travelers to share their experiences, stories, and favorite spots around the world.  
You can create posts, like and comment on others' adventures, save favorites, and much more.

---

## 🚀 Getting Started

To run this project locally, you’ll need to set up both the backend and frontend.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/natalia-maryshko/wander-wave-project.git
cd wander-wave

2️⃣ Start the backend (requires Docker)
Make sure you have Docker Desktop installed and running with WSL 2 enabled (on Windows).

Then, run:

bash

docker-compose down -v
docker-compose up --build
This will start the backend server and database inside Docker containers.

⚠️ You must have a .env file in the root of the project.

Example .env file:
env

SECRET_KEY=your_django_secret_key
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=ww_db
POSTGRES_HOST=db
POSTGRES_PORT=5432
PGDATA=/var/lib/postgresql/data

3️⃣ Start the frontend
After the backend is running, open a new terminal and run:

bash

cd frontend
npm install
npm start
The frontend will be available at:
👉 http://localhost:3000

Make sure it connects to the correct backend API (e.g. http://localhost:8008).

💡 Features
✏️ Create and publish travel posts

💬 Comment and like others' stories

🌍 Choose and display locations

🔖 Save posts to favorites

🔎 Use or create hashtags

👤 User authentication

🐳 Dockerized backend for easy setup

🛠 Tech Stack
Frontend: React, Redux, TypeScript

Backend: Django, Django REST Framework

Database: PostgreSQL

DevOps: Docker, Docker Compose

📩 Contributions
This project was developed as a team collaboration during Mate Academy.
Frontend and design by Nataliia Maryshko, backend by Ruslan Baranov.
