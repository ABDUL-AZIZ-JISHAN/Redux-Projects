import { BOOK, DELETEFLIGHT } from "./actionTypes"

export const bookNewFlight = (newFlightObj) =>{
    return {
        type: BOOK,
        payload : newFlightObj
    }
}

export const deleteBookingOne = (flightObj) => {
    return {
        type: DELETEFLIGHT,
    payload: flightObj 
   }
}


