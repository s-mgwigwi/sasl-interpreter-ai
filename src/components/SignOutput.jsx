export default function SignOutput({ sign }) {
  return (
    <div className="sign-output">
      <h2>Detected Sign:</h2>
      <p>{sign || "None"}</p>
    </div>
  );
}