import { ADDPRODUCT } from "./actionTypes";

export const addNewProduct = (product) =>{
    return {
        type: ADDPRODUCT,
        payload: product
    }
}

