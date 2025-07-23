// src/components/TxtViewer.js
import { useEffect, useState } from "react";

const TxtViewer = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/app-ads.txt")
      .then((res) => res.text())
      .then((data) => setText(data))
      .catch((err) => console.error("Error loading .txt file:", err));
  }, []);

  return (
    <div style={{ padding: "1rem", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
      <h2>App Ads File</h2>
      <pre>{text}</pre>
    </div>
  );
};

export default TxtViewer;
