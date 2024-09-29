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
import TabTest from "./components/Tabs/tab_test";
import ModalTest from "./components/Modal/Modal_test";
import GitHubFinder from "./components/GitHub_Finder/GithubFinder";
import SearchAutoComplete from "./components/Search_AutoComplete/Search_Auto_Complete";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import UseFetchTest from "./components/useFetch/index"
import UseOutsideClick from "./components/useOutsideClick/index";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating nStars={12} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"2"}
        limit={"10"}
      />
      <LoadMore />
      <NavMenu menus={menus} />
      <QrGenerator />
      <DarkMode />
      <ScrollIndicator />
      <TabTest />
      <ModalTest />
      <GitHubFinder />
      <SearchAutoComplete />
      <TicTacToe />
      <UseFetchTest />
      <UseOutsideClick />
    </>
  );
}

export default App;
