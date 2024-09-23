import { useState } from "react";
import QRCode from "react-qr-code";
import './style.css'

export default function QrGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerate() {
    setQrCode(input);
    setInput('')
  }

  return (
    <div className="container" style={{gap:"20px"}}>
      <h1>QR Code Generator</h1>
      <div className="qr_container">
        <input
          type="text"
          name="QR_Code"
          value={input}
          placeholder="Enter Value"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr_code_value" value={qrCode} bgColor="white" size={400} />
      </div>
    </div>
  );
}
