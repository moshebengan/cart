

export const Cart = () => {
    const STORAGE_NAME = "cart";
    let personal_cart = {
        cart: []
    };

  return {
    personal_cart,
    STORAGE_NAME
  }
}

export default Cart
