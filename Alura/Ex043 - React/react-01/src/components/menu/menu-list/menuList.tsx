import s from "./menuList.module.css";

type MenuListProps = React.HTMLAttributes<HTMLUListElement>;

export const MenuList = ({children}: MenuListProps) => {
  return (
    <nav>
      <ul className={s.navegacao}>
        {children}
      </ul>
    </nav>
  );
}
