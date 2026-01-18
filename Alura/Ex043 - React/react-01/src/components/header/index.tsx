import { HeaderList } from "./components/headerList";
import { HeaderListItem } from "./components/headerListItem";
import { Logo } from "../logo";
import logoImg from "../../assets/Logo.png";
import { HeaderLinks } from "./components/headerLinks";
import { HeaderFormFilters } from "./components/headerFormFilters";
import { HeaderActions } from "./components/headerActions";

export const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src={logoImg} />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters/>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions/>
        </HeaderListItem>
      </HeaderList>
    </header>
  );
}
