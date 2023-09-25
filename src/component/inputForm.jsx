import { useState } from "react";
import {bookNewFlight} from "../redux/booking/action";

import {  useDispatch, useSelector } from "react-redux";
const InputForm = () => {
  const bookedFlights = useSelector((store) => store.bookFlightReducer);
  const dispatch = useDispatch();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [guest ,setGuest ] = useState("");
  const [catagory ,setCatagory] = useState("");


  const  handleSubmit = (e) => {
      e.preventDefault();
      if(from && to && date && catagory && guest){
       const newBooking = {from, to, date, catagory, guest};
       dispatch(bookNewFlight(newBooking));
      }else{
        console.log("Please select all inputs.");
      }
  }


  return (
    <form onSubmit={handleSubmit} className="first-hero lws-inputform">
      {/* from  */}
      <div className="des-from">
        <p>Destination From</p>
        <div className="flex flex-row">
          <img src="./img/icons/Frame.svg" alt="img" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="from"
            id="lws-from"
            required
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value hidden>
              Please Select
            </option>
            <option>Dhaka</option>
            <option>Sylhet</option>
            <option>Saidpur</option>
            <option>Cox's Bazar</option>
          </select>
        </div>
      </div>
      {/* to  */}
      <div className="des-from">
        <p>Destination To</p>
        <div className="flex flex-row">
          <img src="./img/icons/Frame.svg" alt="img" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="to"
            id="lws-to"
            required
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value hidden>
              Please Select
            </option>
            <option>Dhaka</option>
            <option>Sylhet</option>
            <option>Saidpur</option>
            <option>Cox's Bazar</option>
          </select>
        </div>
      </div>
      {/* date  */}
      <div className="des-from">
        <p>Journey Date</p>
        <input
          type="date"
          className="outline-none px-2 py-2 w-full date"
          name="date"
          id="lws-date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {/* guests  */}
      <div className="des-from">
        <p>Guests</p>
        <div className="flex flex-row">
          <img src="./img/icons/Vector (1).svg" alt="img" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="guests"
            id="lws-guests"
            required
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
          >
            <option value hidden>
              Please Select
            </option>
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3">3 Persons</option>
            <option value="4">4 Persons</option>
          </select>
        </div>
      </div>
      {/* Class  */}
      <div className="des-from !border-r-0">
        <p>Class</p>
        <div className="flex flex-row">
          <img src="./img/icons/Vector (3).svg" alt="img" />
          <select
            className="outline-none px-2 py-2 w-full"
            name="ticketClass"
            id="lws-ticketClass"
            required
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
          >
            <option value hidden>
              Please Select
            </option>
            <option>Business</option>
            <option>Economy</option>
          </select>
        </div>
      </div>
      <button style={bookedFlights.length === 3 ?{cursor:"not-allowed"} : {cursor:"default"}} className="addCity" type="submit" id="lws-addCity">
        <svg
          width="15px"
          height="15px"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{2}"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="text-sm">Book</span>
      </button>
    </form>
  );
};

export default InputForm;
