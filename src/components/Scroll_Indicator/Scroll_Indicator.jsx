import { useEffect, useState } from "react";
import "./style.css";

export default function ScrollIndicator() {
  const [scroll, setScroll] = useState(0);

  function handleScrollPercent() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="scroll">
      <h1>Scroll Indicator</h1>
      <div className="sp_container">
        <div className="progress_bar" style={{ width: `${scroll}%` }}></div>
      </div>
    </div>
  );
}
