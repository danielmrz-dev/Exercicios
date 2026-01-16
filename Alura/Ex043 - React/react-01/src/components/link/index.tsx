import React, { type PropsWithChildren } from "react";
import s from "./link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren;

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a href="" {...props} className={s.link}>
      {children}
    </a>
  );
}
