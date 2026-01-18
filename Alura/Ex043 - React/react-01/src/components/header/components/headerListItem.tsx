import React from "react";
import s from "../header.module.css";

export const HeaderListItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({ children }) => {
  return (
    <li className={s.menuitem}>
      { children }
    </li>
  );
}
