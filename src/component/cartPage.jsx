import SingleCartItem from "./singleCartItem";
import { useSelector } from "react-redux";
import Navbar from "./navbar";

const CartPage = () => {
  const carts = useSelector((state) => state.cartReducer);
  const subTotal =
    carts.reduce((prev, current) => {
      return prev + current.selectedQuantity * current.price;
    }, 0) || 100;

  const total = subTotal * (5 / 100) + subTotal;
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {carts?.map((cart, key) => {
                return <SingleCartItem key={key} cart={cart} />;
              })}
              {carts.length === 0 && <p>No carts available</p>}
            </div>
            {/* Bill Details */}
            <div>
              <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                  Bill Details
                </h4>
                <div className="space-y-4">
                  {/* sub total */}
                  <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>
                      BDT <span className="lws-subtotal">{subTotal}</span>
                    </p>
                  </div>
                  {/* Discount */}
                  <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <p>
                      BDT <span className="lws-discount">10%</span>
                    </p>
                  </div>
                  {/* VAT */}
                  <div className="flex items-center justify-between">
                    <p>VAT</p>
                    <p>
                      BDT <span className="vat">5%</span>
                    </p>
                  </div>
                  {/* Total */}
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p className="font-bold">
                      BDT <span className="lws-total">{total}</span>
                    </p>
                  </div>
                  <button className="placeOrderbtn">place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
