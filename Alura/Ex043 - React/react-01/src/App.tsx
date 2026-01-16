import { Banner } from "./components/banner";
import bannerImg from "./assets/Banner Desktop.png";
import "./index.css";
import { Link } from "./components/link";

function App() {
  return (
    <>
      <Link href="/" target="_blank">
        Link
      </Link>
      <Banner src={bannerImg} altText="Banner" />
    </>
  );
}

export default App;
