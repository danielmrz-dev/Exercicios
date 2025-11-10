import { useData } from "../Contexts/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";

function Header() {
  // const { data, error, loading } = useData();

  return (
    <header className="mb-2">
      <div className="mb-2">
        <DateRange/>
        <Meses/>
      </div>
    </header>
  );
}

export default Header;
