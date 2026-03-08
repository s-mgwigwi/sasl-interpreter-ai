export function classifySign(landmarks) {
  // If no hand is detected return null.
  if (!landmarks) return null;


  // Rule 1: Thumbs Up (thumb extended, other fingers folded)
  function dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  const wrist = landmarks[0];

  const thumbTip = landmarks[4];
  const thumbIP = landmarks[3];
  const thumbMCP = landmarks[2];

  const indexTip = landmarks[8];
  const indexPIP = landmarks[6];

  const middleTip = landmarks[12];
  const middlePIP = landmarks[10];

  const ringTip = landmarks[16];
  const ringPIP = landmarks[14];

  const pinkyTip = landmarks[20];
  const pinkyPIP = landmarks[18];

  // Strong thumb extension
  const thumbExtended =
    dist(thumbTip, wrist) > dist(thumbIP, wrist) * 1.2;

  // Thumb separated from hand
  const thumbSeparated =
    dist(thumbTip, indexTip) > dist(indexTip, wrist) * 0.4;

  // Fingers folded
  const indexFolded =
    dist(indexTip, wrist) < dist(indexPIP, wrist);

  const middleFolded =
    dist(middleTip, wrist) < dist(middlePIP, wrist);

  const ringFolded =
    dist(ringTip, wrist) < dist(ringPIP, wrist);

  const pinkyFolded =
    dist(pinkyTip, wrist) < dist(pinkyPIP, wrist);

  if (
    thumbExtended &&
    thumbSeparated &&
    indexFolded &&
    middleFolded &&
    ringFolded &&
    pinkyFolded
  ) {
    return "THUMBS_UP";
  }

  // Rule 2: Fist (fingertips close to wrist)
  const fingerTips = [8, 12, 16, 20];
  const closeToWrist = fingerTips.every((t) => {
    return Math.abs(landmarks[t].y - wrist.y) < 0.07;
  });

  if (closeToWrist) {
    return "FIST";
  }

  return "UNKNOWN";
}