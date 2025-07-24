# 🧠 Job Board API – Backend

A clean, scalable, and production-ready REST API built with **Node.js**, **Express**, and **MongoDB** for job posting and application submission.

This backend powers the Job Board web app — enabling users to browse job listings and apply, while allowing an authenticated admin to post new jobs.

## 📦 Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Language    | JavaScript (Node.js)         |
| Framework   | Express.js                   |
| Database    | MongoDB Atlas (Cloud-hosted) |
| Auth        | JSON Web Tokens (JWT)        |
| Env Config  | dotenv                       |
| Dev Tools   | nodemon, Postman, Thunder    |

---

## 📦 Installation

```bash
git clone https://github.com/RafatAiub/job-board-project-server.git
cd job-board-api/server
npm install
```
## 🧱 Project Structure
server/
├── config/
│ └── db.js # MongoDB connection logic
├── controllers/
│ ├── jobController.js # Job handlers
│ └── applicationController.js
├── routes/
│ ├── jobRoutes.js # Job routes
│ └── applicationRoutes.js
├── models/
│ ├── Job.js # Job Schema
│ └── Application.js # Application Schema
├── middleware/
│ └── authMiddleware.js # JWT verification
├── .env # Env variables (not committed)
├── .gitignore
├── server.js # Entry point
└── generateToken.js # Admin token generator

#### GET /api/jobs
Supports: `?page=1&limit=10`
Returns `jobs[]` + `meta` pagination info

## 🚀 Run the Server Locally
npm run dev
# or
node server.js

## Server will run on:
🔗 http://localhost:5000

## ✅ Generate Admin Token:

  node generateToken.js

# Then use the token in headers:
   Authorization: Bearer <your_token>
