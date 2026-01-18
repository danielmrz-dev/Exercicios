import { Banner } from "./components/banner";
import bannerImg from "./assets/Banner Desktop.png";
import "./index.css";
import { Header } from "./components/header";
import { MovieSection } from "./components/movieSection";

function App() {
  return (
    <>
      <Header/>
      <Banner src={bannerImg} altText="Banner" />
      <MovieSection/>
    </>
  );
}

export default App;
