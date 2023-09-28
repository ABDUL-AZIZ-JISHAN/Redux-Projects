import { useDispatch } from "react-redux";
import { addCartAction } from "../redux/cart/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ product }) => {
  
  const { imgUrl, name, category, price, quantity , id}  = product;
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer);
  let isInCarts = carts.filter((cart) => cart.id === id);
  const navigate = useNavigate()
  const handleAddToCart = (e) => {
    if (!isInCarts.length) {
       dispatch(addCartAction({ ...product, selectedQuantity: 1 }));
    }else{
      navigate("/cart");
    }
  };
  return (
    <div id={id} className="lws-productCard">
      <img className="lws-productImage" src={imgUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">
            {isInCarts.length ? isInCarts[0].quantity : quantity}
              </span>
          </p>
        </div>
        <button onClick={handleAddToCart} className="lws-btnAddToCart">
         {isInCarts.length ? "View Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
