## 🛡️ Digital Forensics: Evidence Identification & Preservation
![alt text](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![alt text](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![alt text](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

![alt text](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
Developed by: Varun Async
Project Objective: To demonstrate the standardized process of identifying, preserving, and validating the integrity of digital evidence following a system compromise.

---

## 🚀 Live Demo
🔗 View Digital Forensics Live on Render

---

## 📖 Overview :
Improper handling of digital evidence (logs, memory, files) can lead to data contamination, making it unusable in legal proceedings. This project provides a structured framework and toolset to ensure Chain of Custody and Evidence Integrity.

Key Tasks Performed:
Identification: Pinpointing volatile and non-volatile artifacts (RAM, Logs, MIME types).
Preservation: Implementing bit-for-bit validation logic.
Integrity: Utilizing cryptographic hashing (SHA-256) to ensure zero data mutation.

---

## ✨ Features
- Real-Time Forensic Hashing: Uses the browser's native Web Crypto API to generate SHA-256 fingerprints locally (No data ever leaves your machine).
- Dynamic Evidence Log: Tracks multiple artifacts with automated timestamps and metadata extraction.
- Office Document Sanitization: Automatically cleans and formats complex MIME types (e.g., .docx, .xlsx) for clean reporting.
- Responsive Design: Fully functional across desktop and mobile forensic workstations.

---

## 🛠️ Technical Stack
- Frontend: React 18 (Vite)
- Styling: Tailwind CSS (Custom Midnight Theme)
- Icons: Lucide-React
- Cryptography: Web Crypto API (SubtleCrypto)
- Deployment: Render (Static Site Hosting)

---

## 📂 Project Structure

Digital-forensics/
├── src/
│   ├── components/
│   │   └── App.jsx        # Main Dashboard Logic & Hashing Engine
│   ├── index.css          # Tailwind Directives & Global Styles
│   └── main.jsx           # Entry Point
├── tailwind.config.js     # Custom Midnight Color Palette
├── package.json           # Project Dependencies
└── README.md              # Project Documentation

---

## 📑 Forensic Methodology (Theory) :
1. Evidence Identification
In the event of a breach, we target:
Volatile Evidence: System memory (RAM) and active network connections.
Non-Volatile Evidence: Application logs (/var/log), modified configuration files, and hidden binaries.
2. Preservation Strategy
Isolation: Disconnecting the affected system from the network to prevent remote wiping.
Imaging: Creating a bit-for-bit physical image of the storage media using hardware write-blockers.
Hashing: Generating a cryptographic hash at the moment of collection to serve as a digital "seal."
3. Why Integrity Matters?
Evidence integrity is the cornerstone of Digital Forensics. If a single bit changes, the hash will fail validation, rendering the evidence inadmissible in a court of law. This tool automates the validation check to prevent human error.

---

## ⚙️ Installation & Setup
To run this project locally:
Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Digital-forensics.git
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Build for production:
```bash
npm run build
```