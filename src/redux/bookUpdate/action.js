import {CHANGEDFORMUPDATE, CLEARFORMSTATE} from "./actionTypes"

export const bookFormUpdateAction = (book) =>{
    return {
        type: CHANGEDFORMUPDATE,
        payload: book
    }
}

export const clearBookFormAction = () =>{
    return {
        type: CLEARFORMSTATE,
    }
}