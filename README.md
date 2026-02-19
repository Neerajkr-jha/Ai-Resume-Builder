# AI Resume Builder

## 📖 About  
AI Resume Maker is a full-stack web application that helps users generate professional resumes using Artificial Intelligence. The project is divided into two main parts:

- **frontend** – User interface built with React + Vite  
- **server** – Backend API built with Node.js and Express with AI integration  

It allows users to enter their details, enhance content using AI, preview resumes, and download them in PDF format.

---

## 🛠 Tech Stack  

- **Frontend**: React, Vite, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **AI Integration**: OpenAI / Gemini API  
- **PDF Generation**: html2pdf / Puppeteer  
- **Deployment**: Vercel  

---

## 🚀 Features  

- AI-powered resume content generation  
- Real-time resume preview  
- Professional resume templates  
- PDF export functionality  
- Responsive design  
- Clean frontend-backend separation  

---

## 📁 Repository Structure  

```text
/Ai-Resume-maker
│
├── frontend/                 # React + Vite Frontend
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   ├── .env                  # Environment variables
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
│
├── server/                   # Node.js Backend
│   ├── Model/                # Database models
│   ├── configs/              # Configuration files
│   ├── controlers/           # API controllers
│   ├── middleware/           # Middleware functions
│   ├── routes/               # API routes
│   ├── utils/                # Utility functions
│   ├── node_modules/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js             # Backend entry point
│
├── README.md
└── .gitignore
