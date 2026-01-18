import React from "react";
import s from "../header.module.css";

type HeaderListProps = React.HTMLAttributes<HTMLUListElement>;

export const HeaderList: React.FC<HeaderListProps> = ({ children }) => {
  return (
    <ul className={s.cabecalho}>
      {children}
    </ul>
  );
}
