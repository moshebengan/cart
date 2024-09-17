import { useEffect, useState } from "react";
import { fetchCall, getCartItems } from "../utils/apiCalls";
import { useOutletContext } from "react-router-dom";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { MdOutlineFilterAlt, MdOutlineFilterAltOff } from "react-icons/md";

const ShopPage = () => {
  const [cartItems, setCartItems] = useOutletContext();
  const [searchState, setSearchState] = useState(false);
  const [search, setSearch] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllProducts();
    setCartItems(getCartItems());
  }, []);

  const getAllProducts = async () => {
    try {
      const [mens, womens] = await Promise.all([
        fetchCall("/products/category/men's clothing"),
        fetchCall("/products/category/women's clothing"),
      ]);
      setProducts([...mens, ...womens]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openFilter = () => {
    setIsFilter(!isFilter);
  };

  const searchProduct = () => {
    if (searchState) {
      setLoading(true);
      setSearchState(false);
      setSearch("");
      getAllProducts();
    }
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };



  return (
    <>
      <div className="container flex justify-end items-center text-dark-blue font-poppins pt-3 gap-5">
        <div className="w-auto relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search"
            value={search}
            onChange={handleSearchInput}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button
            className="absolute right-0 top-0 bg-orange-500 py-2 px-3 rounded-r-full hover:bg-orange-700"
            onClick={searchProduct}
          >
            {searchState ? (
              <IoMdClose size={"1.5em"} color="white" />
            ) : (
              <IoIosSearch size={"1.5em"} color="white" /> // need to check it
            )}
          </button>
        </div>
        <button
          className={`z-[100] border-2 border-dark-blue p-2 text-dark-blue rounded-full hover:bg-dark-blue hover:text-white ${
            isFilter ? "bg-dark-blue text-white" : ""
        }`}
        onClick={openFilter}
    >
        {isFilter ? (
            <MdOutlineFilterAltOff size={"1.4em"} />
        ) : (
            <MdOutlineFilterAlt size={"1.4em"} />
        )}
        </button>
      </div>
    </>
  );
};

export default ShopPage;
