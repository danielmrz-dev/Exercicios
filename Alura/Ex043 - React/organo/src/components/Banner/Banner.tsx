import image from "../../assets/imagens/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <img src={image} alt="Banner principal" />
    </header>
  );
}

export default Banner;