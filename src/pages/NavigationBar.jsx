import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Cart from "../components/Cart";

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
    <>
      <div className="w-full bg-dark-blue font-poppins">
        <div className="container">
          <nav className="py-3 flex justify-between items-center text-white">
            <h1 className="font-bold text-2xl">MosesBG-STORE</h1>
            <div className="hidden md:flex gap-6">
              <Link to={"/fake-store/home"} className="transition hover:scale-110 hover:font-bold">Home</Link>
              <Link to={"/fake-store/shop"} className="transition hover:scale-110 hover:font-bold">Shop</Link>
              <Link to={"/fake-store/contact-us"} className="transition hover:scale-110 hover:font-bold">Contact us</Link>
              <Link className="transition hover:scale-110 hover:font-bold">Services</Link>
            </div>
            <div className="flex flex-row items-center gap-5">
              <Cart resetNav={resetNav} items={cartItems} />
              <div className="z-50 md:hidden">
                <button className="flex items-center">
                  {isOpen ? (
                    <IoMdClose className="p1" onClick={openNav} />
                  ) : (
                    <IoMdMenu className="p1" onClick={openNav} />
                  )}
                </button>
              </div>
            </div>
          </nav>
          <div
            className={`container text-dark-blue ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="z-40 fixed top-0 left-0 bottom-0 w-full bg-dark-blu opacity-35"></div>
            <nav className="z-50 fixed top-0 left-0 bottom-0 flex flex-col gap-10 w-5/6 max-w-sm py-6 px-6 bg-[#F8F8F8] overflow-y-auto">
              <div>
                <h1 className="font-bold text-3xl">MosesBG-SHOP</h1>
                <hr className="h-px mt-3 bg-gray-200 border-0" />
              </div>
              <div className="flex flex-col gap-5">
                <Link
                  to={"/fake-store"}
                  className="nav-item-hover"
                  onClick={resetNav}
                >
                  Home
                </Link>
                <Link
                  to={"/fake-store/shop"}
                  className="nav-item-hover"
                  onClick={resetNav}
                >
                  Shop
                </Link>
                <Link className="nav-item-hover">Contact Us</Link>
                <Link className="nav-item-hover">Services</Link>
                <hr className="h-px mt-3 bg-gray-200 border-0" />
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="h-screen w-auto">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
    </>
  );
};

export default NavigationBar;
