import React from "react";
import s from "./button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "default" | "icon";
};

export const Button: React.FC<ButtonProps> = ({ variant = "default", children, ...props }) => {
  const classes: Record<string, string> = {
    default: s.default,
    icon: s.icon,
  };
  return (
    <button className={classes[variant]} {...props}>
      {children}
    </button>
  );
};
