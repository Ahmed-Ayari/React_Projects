import { useState } from "react";
import './style.css'

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="container">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div className={`tab-item ${currentTabIndex === index ? 'tabs_active' : ''}`} key={tabItem.label} onClick={() => handleOnClick(index)}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
