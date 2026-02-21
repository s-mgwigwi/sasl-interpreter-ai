import React, { useRef, useEffect } from "react";
import { setupMediaPipeHands } from "../ml/mediapipe";
import { classifySign } from "../ml/classifier";

export default function CameraFeed({ onSignDetected }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setupMediaPipeHands(videoRef, canvasRef, (results) => {
      const sign = classifySign(results.multiHandLandmarks?.[0]);
      if (sign) onSignDetected(sign);
    });
  }, []);

  return (
    <div>
      <video ref={videoRef} className="video" autoPlay muted playsInline></video>
      <canvas ref={canvasRef} className="canvas"></canvas>
    </div>
  );
}