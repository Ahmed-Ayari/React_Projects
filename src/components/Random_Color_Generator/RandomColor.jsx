import { useEffect, useState } from "react";
import './style.css'

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(hexColor);
  }

  function handleRandomRgbColor() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`RGB(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    colorType === "rgb" ? handleRandomRgbColor() : handleRandomHexColor();
  }, [colorType]);

  return (
    <div
      className="rc_container"
      style={{
        background: color,
        height: "100vh",
      }}
    >
      <button onClick={() => setColorType("hex")}>Random HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Random RGB Color</button>
      <button
        onClick={
          colorType === "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "20vh",
          flexDirection: "column",
        }}
      >
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
