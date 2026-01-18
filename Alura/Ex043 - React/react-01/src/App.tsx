import { Banner } from "./components/banner";
import bannerImg from "./assets/Banner Desktop.png";
import "./index.css";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header/>
      <Banner src={bannerImg} altText="Banner" />
    </>
  );
}

export default App;
