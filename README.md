# SASL Interpreter AI

A minimal, fully offline **South African Sign Language (SASL)** detection prototype using:

- **React** (UI)
- **MediaPipe Hands** (hand landmark detection)
- **JavaScript rule-based classifier** (starter AI for 2+ hand signs)

This project is designed to **support digital inclusion and accessibility**, providing a foundation for future AI-driven SASL tools.

---

## Features

- Runs 100% offline in the browser  
- Live webcam hand tracking  
- Detects initial signs: THUMBS_UP, FIST  
- Easy to extend to 10+ gestures  
- MIT licensed

---

## Project Structure

sasl-interpreter-ai/
├── public/
│ └── vite.svg
├── src/
│ ├── main.jsx
│ ├── App.jsx
│ ├── components/
│ │ ├── CameraFeed.jsx
│ │ └── SignOutput.jsx
│ ├── ml/
│ │ ├── mediapipe.js
│ │ └── classifier.js
│ ├── utils/
│ │ └── landmarks.js
│ └── styles/
│ └── app.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── LICENSE
└── README.md


---

## How It Works

**Webcam → MediaPipe Hands → JS Classifier → UI Output**

- MediaPipe extracts **21 hand landmarks**
- `classifier.js` applies simple rules to detect signs
- Detected sign is displayed in real-time on the React UI

---

## Installation & Run

```bash
npm install
npm run dev