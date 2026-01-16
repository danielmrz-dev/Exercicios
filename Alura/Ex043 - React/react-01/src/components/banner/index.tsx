import React from "react";
import s from "./banner.module.css";

type BannerProps = {
  src: string;
  altText: string;
}

export const Banner: React.FC<BannerProps> = ({ src, altText }) => {
  return <img src={src} alt={altText} className={s.banner} />;
}
