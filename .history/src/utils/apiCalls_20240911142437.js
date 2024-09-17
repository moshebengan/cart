import { Cart } from "./data";

const apiUrl = "https://fakestoreapi.com";

const fetchCall = async (url) => {
  const response = await fetch(`${apiUrl}${url}`, {
    mode: "cors",
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
  return response;
};

const getCartItems = () => {
  try {
    const cartStorage =
      JSON.parse(localStorage.getItem(Cart.STORAGE_NAME)) || [];
    const sum = cartStorage.reduce((accum, item) => accum + item.quantity, 0);

    return sum;
  } catch (err) {
    throw new Error(err.message);
  }
};

export { fetchCall, getCartItems };
