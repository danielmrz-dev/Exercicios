import React from "react";
import s from "./Menu.module.scss";
import { MenuLink } from "../MenuLink/MenuLink";

export const Menu: React.FC = () => {
  return (
    <header>
      <nav className={s.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/sobre-mim">Sobre mim</MenuLink>
      </nav>
    </header>
  );
};
