import { UPDATEBOOK, DELETEBOOK, LOADBOOKS } from "./actionTypes";



export const deleteBookAction = (id) =>{
    return {
        type: DELETEBOOK,
        payload: id
    }
}

export const updateBookAction = (book) =>{
    return {
        type: UPDATEBOOK,
        payload: book
    }
}

export const loadBooksAction = (book) =>{
    return {
        type: LOADBOOKS,
        payload: book
    }
}