import React, { type PropsWithChildren } from "react";
import s from "./MenuLink.module.scss";
import { Link, useLocation } from "react-router-dom";

type MenuLinkProps = {
  to: string;
} & PropsWithChildren;

export const MenuLink: React.FC<MenuLinkProps> = ({ children, to }) => {

  const location = useLocation();

  return (
    <Link to={to} className={`${s.link} ${location.pathname === to ? s.underlined : ''}`}>
      { children }
    </Link>
  );
}
