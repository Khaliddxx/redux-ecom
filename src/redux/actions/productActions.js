import { ActionTypes } from "../actionTypes/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE.SELECTED_PRODUCT,
  };
};
