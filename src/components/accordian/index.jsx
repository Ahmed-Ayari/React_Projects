import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {

  //single selection
  const [selected, setSelected] = useState(null);

  //multi selection
  const [enablemultiSelection, setEnablesetMultiSelection] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSelectedItem(currentId) {
    setSelected(currentId === selected ? null : currentId); //selecting an already open item will close it 
  }

  function handleMultiSelection(currentId) {
    let cpy = [...multi];
    const findCurrentId = cpy.indexOf(currentId);
    
    if (findCurrentId === -1) cpy.push(currentId);
    else cpy.splice(findCurrentId, 1);
    setMulti(cpy);
  }

  return (
    <div className="wrapper container">
      <button onClick={() => setEnablesetMultiSelection(!enablemultiSelection)}>
        Enable multiple selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item">
              <div
                className="title"
                onClick={
                  enablemultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSelectedItem(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enablemultiSelection
                ? multi.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <span>No data found!</span>
        )}
      </div>
    </div>
  );
}
