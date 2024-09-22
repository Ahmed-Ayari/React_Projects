import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/Random_Color_Generator/RandomColor";
import StarRating from "./components/Star_Rating/StarRating";
import ImageSlider from "./components/Image_Slider/Image_Slider";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating nStars={12}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"2"} limit={"10"}/>
    </>
  );
}

export default App;
