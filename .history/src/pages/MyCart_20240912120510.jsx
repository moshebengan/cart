import { useState } from "react";
import EmptyCart from "../components/EmptyCart";

const MyCart = () => {
  const [cart, setCart] = useState([]);
  if (cart.length <= 0) return <EmptyCart />;
  return (
    <>
      <div className="container grid grid-cols-1 text-dark-blue font-poppins bg-white-100 pt-3 gap-5 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col col-span-2">
            CART
        </div>
      </div>
    </>
  );
};

export default MyCart;
