import { useDispatch } from "react-redux";
import {
  removeCartAction,
  incrementSelectedQuantityAction,
  decrementSelectedQuantityAction,
} from "../redux/cart/actions";
const SingleCartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const { imgUrl, id, name, selectedQuantity, price, category } = cart;

  const handleBtnIncrement = (id) => {
    dispatch(incrementSelectedQuantityAction(id));
  };

  const handleBtnDecrement = (id) => {
    dispatch(decrementSelectedQuantityAction(id));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img className="lws-cartImage" src={imgUrl} alt="product" />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleBtnIncrement(id)}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus" />
          </button>
          <span className="lws-cartQuantity">{selectedQuantity}</span>
          <button
            onClick={() => handleBtnDecrement(id)}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus" />
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">
            {selectedQuantity * price}
          </span>
        </p>
      </div>
      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => dispatch(removeCartAction(id))}
          className="lws-removeFromCart"
        >
          <i className="text-lg text-red-400 fa-solid fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default SingleCartItem;
