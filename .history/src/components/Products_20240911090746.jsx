import { RiShoppingCart2Line } from "react-icons/ri";

const Products = ({ id, UrlImage, name, price, addToCart, showAdd }) => {
  return (
    <div className="max-w-full bg-white flex flex-col rounded-lg border border-gray-100 shadow-md">
      <div className="p-4">
        <img
          className="rounded-t-lg max-w-[60%] mx-auto md:h-52 md:object-scale-down"
          src={UrlImage}
          alt={name}
        />
      </div>
      <div className="flex justify-between items-start px-2 pt-5">
        <div className="p-2 flex-grow h-28 lg:h-36">
          <h3 className="text-lg lg:text-base">{name}</h3>
          <div className="flex gap-2 items-end mt-2">
            <h3 className="text-2xl font-bold text-orange">{`$${price}`}</h3>
          </div>
        </div>
      </div>
      {showAdd ? (
        <div className="flex justify-between items-center px-2 pb-2 text-white">
          <button className="w-full px-5 py-2 5 font-medium bg-orange-500 rounded-lg flex items-center justify-center gap-1 transition hover:bg-orange-800"
          onClick={() => addToCart(id, UrlImage, name, price)}>
            <RiShoppingCart2Line size={"1.4em"} />
            Add to Cart
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Products;
