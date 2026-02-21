export function classifySign(landmarks) {
  if (!landmarks) return null;

  const thumbTip = landmarks[4];
  const indexTip = landmarks[8];

  // Rule 1: Thumbs Up
  if (thumbTip.y < indexTip.y) {
    return "THUMBS_UP";
  }

  // Rule 2: Fist (fingertips close to wrist)
  const wrist = landmarks[0];
  const fingerTips = [8, 12, 16, 20];
  const closeToWrist = fingerTips.every((t) => {
    return Math.abs(landmarks[t].y - wrist.y) < 0.07;
  });

  if (closeToWrist) {
    return "FIST";
  }

  return "UNKNOWN";
}