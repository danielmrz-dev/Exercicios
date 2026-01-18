import React from "react";
import s from "./SelectGroup.module.css";

interface SelectorGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

export const SelectorGroup: React.FC<SelectorGroupProps> = ({ icon, children, ...props }) => {
  return (
    <div className={s.container}>
      {
        icon && 
          <div className={s.icone}>
            {icon}
          </div>
      }
      <select className={s.selector} {...props}>{children}</select>
    </div>
  );
};
