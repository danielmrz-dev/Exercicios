import { Button } from "../../button";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

// type HeaderActionsProps = {};

export const HeaderActions = () => {
  return (
    <div>
      <Button variant="icon">
        <HiOutlineShoppingCart/>
      </Button>
      <Button variant="icon">
        <HiOutlineUser/>
      </Button>
    </div>
  );
}
