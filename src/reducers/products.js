import * as Types from "../constants/ActionTypes";

let initialState = [];

const findIndex = (products, id) => {
  let result = -1;
  if (products.length > 0) {
    products.forEach((item, index) => {
      if (item.id === id) {
        result = index;
      }
    });
  }
  return result;
};

const products = (state = initialState, action) => {
  let index = -1;
  const { id, product } = action;
  switch (action.type) {
    case Types.GET_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case Types.UPDATE_PRODUCT:
      index = findIndex(state, product.id);
      state[index] = product;
      return [...state];
    default:
      return [...state];
  }
};

export default products;
