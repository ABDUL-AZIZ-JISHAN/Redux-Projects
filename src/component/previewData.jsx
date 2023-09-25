import PreviewSingleData from "./previewSingleData";
import { useSelector } from "react-redux";

const PreviewData = () => {
  const bookedFlights = useSelector((store) => store.bookFlightReducer);
  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className={bookedFlights.length !== 0 ? "divide-y divide-gray-300/20" : "divide-y divide-gray-300/20 hidden"} id="lws-previewBooked">
          {bookedFlights.map((data, key) => {
            return <PreviewSingleData data={data} key={key} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PreviewData;
