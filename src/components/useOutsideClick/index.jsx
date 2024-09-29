import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

export default function UseOutsideClick() {
  const ref = useRef();
  
  const [showContent, setSowContent] = useState(false);

  useOutsideClick(ref, () => setSowContent(false));

  return (
    <div className="container">
      {showContent ? (
        <div ref={ref} style={{width:'600px', height:"400px", border:'1px solid'}}>
          <h1>This is a random content</h1>
          <p>Please click outside to close this modal</p>
        </div>
      ) : (
        <button onClick={() => setSowContent(true)}>Show content</button>
      )}
    </div>
  );
}
