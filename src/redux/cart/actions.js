import {
  ADDCART,
  REMOVECART,
  INCREMENTSELECTEDQUANTITY,
  DECREMENTSELECTEDQUANTITY,
} from "./actionTypes";

export const addCartAction = (cart) => {
  return {
    type: ADDCART,
    payload: cart,
  };
};

export const removeCartAction = (id) => {
  return {
    type: REMOVECART,
    payload: id,
  };
};

export const incrementSelectedQuantityAction = (id) => {
  return {
    type: INCREMENTSELECTEDQUANTITY,
    payload: id,
  };
};

export const decrementSelectedQuantityAction = (id) => {
  return {
    type: DECREMENTSELECTEDQUANTITY,
    payload: id,
  };
};
