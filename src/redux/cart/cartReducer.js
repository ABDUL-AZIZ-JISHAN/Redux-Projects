import {
  ADDCART,
  REMOVECART,
  INCREMENTSELECTEDQUANTITY,
  DECREMENTSELECTEDQUANTITY,
} from "./actionTypes";

const initialState = [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCART:
      const checkAvailability = state.filter(
        (state) => state.id === action.payload.id
      );
      if (checkAvailability.length > 0) {
        return state;
      }
      return [
        ...state,
        {
          ...action.payload,
          productQuantity: Number(action.payload.productQuantity) - 1,
        },
      ];
    case REMOVECART:
      return state.filter((state) => state.id !== action.payload);
    case INCREMENTSELECTEDQUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          item.selectedQuantity = item.selectedQuantity + 1;
        }
        return item;
      });
    case DECREMENTSELECTEDQUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          if (item.selectedQuantity === 0) {
            item.selectedQuantity = item.selectedQuantity + 1;
          }
          item.selectedQuantity = item.selectedQuantity - 1;
        }
        return item;
      });
    default:
      return state;
  }
};

export default cartReducer;
