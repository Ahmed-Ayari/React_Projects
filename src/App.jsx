import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/Random_Color_Generator/RandomColor";
import StarRating from "./components/Star_Rating/StarRating";
import ImageSlider from "./components/Image_Slider/Image_Slider";
import LoadMore from "./components/Load_More/LoadMore";
import NavMenu from "./components/Nav_Menu/Nav_Menu";
import menus from "./components/Nav_Menu/data";
import QrGenerator from "./components/Qr_Code_Generator/QrGenerator";
import DarkMode from "./components/Dark_Mode/DarkMode";
import ScrollIndicator from "./components/Scroll_Indicator/Scroll_Indicator";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating nStars={12}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"2"} limit={"10"}/>
      <LoadMore />
      <NavMenu menus={menus}/>
      <QrGenerator/>
      <DarkMode />
      <ScrollIndicator />
    </>
  );
}

export default App;
