import React, { useState } from "react";
import CameraFeed from "./components/CameraFeed";
import SignOutput from "./components/SignOutput";

export default function App() {
  const [detectedSign, setDetectedSign] = useState(null);

  return (
    <div className="app-container">
      <h1>Sign Language Intepreter Prototype</h1>
      <CameraFeed onSignDetected={setDetectedSign} />
      <SignOutput sign={detectedSign} />
    </div>
  );
}