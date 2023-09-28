import { ADDPRODUCT } from "./actionTypes";
import uniqid from "uniqid";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [...state, { ...action.payload, id: uniqid() }];     
    default:
      return state;
  }
};

export default productReducer;
