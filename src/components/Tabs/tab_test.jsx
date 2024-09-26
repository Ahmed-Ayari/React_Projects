import Tabs from "./Tabs";

export default function TabTest() {
  const tabs = [
    {
      label: "Tab1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab3",
      content: <div>Tab 3 is better</div>,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
