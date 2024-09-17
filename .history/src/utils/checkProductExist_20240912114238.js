const checkProductExist = (productList, id) => {
  const searchedProduct = productList.filter((product) => product.id === id);
  if (searchedProduct.length > 0) return true;
  else return false;
};

export { checkProductExist };
