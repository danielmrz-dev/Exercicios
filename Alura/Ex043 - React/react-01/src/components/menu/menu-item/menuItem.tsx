import { Link } from "../../link";

type MenuItemProps = React.HTMLAttributes<HTMLLIElement> & {
  href?: string;
};

export const MenuItem = ({children, href = "#"}: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>
        {children}
      </Link>
    </li>
  );
}
