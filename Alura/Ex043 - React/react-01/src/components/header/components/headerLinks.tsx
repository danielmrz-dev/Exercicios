import { MenuList } from "../../menu/menu-list/menuList";
import { MenuItem } from "../../menu/menu-item/menuItem";

export const HeaderLinks = () => {
  return (
    <MenuList>
      <MenuItem>Eventos</MenuItem>
      <MenuItem>Clube Fidelidade</MenuItem>
      <MenuItem>Sobre nós</MenuItem>
    </MenuList>
  );
}
