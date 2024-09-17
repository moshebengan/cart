import { AiOutlineDelete } from "react-icons/ai";

const CartProducts = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:min-w-60">
          <img
            src={props.UrlImage}
            alt={props.name}
            className="max-w-[60%] p-2 mx-auto md:h-52 md:object-scale-down"
          />
        </div>
        <div className="md:flex flex-col justify-between">
          <div className="flex flex-col">
            <h4 className="text-lg lg:text-base">{props.name}</h4>
            <h3 className="text-xl font-bold text-orange-500">{`$${props.price}`}</h3>
          </div>
          <div className="flex flex-row"></div>

          <div className="grid grid-cols-2 text-white gap-2">
            <button
              className="w-full py-2 5 font-medium bg-orange-500 rounded-lg flex items-center justify-center gap-1 transition hover:bg-orange-700 hover:text-white"
              onClick={() => console.log('removed')}
            >
              <AiOutlineDelete size={"1.4em"} />
              Remove
            </button>
            <div className="h-full w-full">
              <div className="flex flex-row h-10 w-full relative bg-transparent mt-1">
                <button
                  className="bg-gray-200 text-gray-600 h-full w-10 rounded-md cursor-pointer outline-none"
                  onClick={() => props.subQuantity(props.id)}
                >
                  <span>-</span>
                </button>
                <input
                  type="number"
                  name="custom-input-number"
                  value={props.quantity}
                  disabled
                  className="text-dark-blue text-center outline-none w-full font-semibold text-base flex items-center"
                />
                <button
                  className="bg-gray-200 text-gray-600 h-full w-10 rounded-md cursor-pointer outline-none"
                  onClick={() => props.addQuantity(props.id)}
                >
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px bg-gray-200 border-0"/>
    </>
  );
};

export default CartProducts;
