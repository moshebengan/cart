import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  const resetNav = () => {
    if (isOpen) setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-dark-blue font-poppins">
      <div className="container">
        <nav className="py-3 flex justify-between items-center text-white">
          <h1 className="font-bold text-2xl">MosesBG-STORE</h1>
          <div className="hidden md:flex gap-6 bg-red-200">
            <Link to={"/fake-store"}>Home</Link>
            <Link>Shop</Link>
            <Link>Contact us</Link>
            <Link>Services</Link>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="z-50 md:hidden">
              <button className="flex items-center">
                {isOpen ? (
                  <IoMdMenu className="p1" onClick={openNav} />
                ) : (
                  <IoMdClose className="p1" onClick={openNav} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
