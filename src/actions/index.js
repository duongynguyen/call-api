import * as Types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const actGetProductsRequest = () => {
  return dispatch => {
    return callApi(`products`, `GET`, null).then(res =>
      dispatch(actGetProducts(res.data))
    );
  };
};

export const actGetProducts = products => {
  return {
    type: Types.GET_PRODUCTS,
    products
  };
};
