import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = ({ resetNav, items }) => {
  return (
    <Link to={"/cart"} onClick={resetNav}>
      <div className="relative">
        <RiShoppingCart2Line size={"1.4em"} className="transition hover:scale-125"/>
        <span className="absolute text-xs bg-orange-500 p-0.3 px-1 text-red-50 rounded-full -top-1.5 left-4">
          {items > 0 ? items : ""}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
