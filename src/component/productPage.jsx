import SingleProduct from "./singleProduct";
import ProductForm from "./productForm";
import { useSelector } from "react-redux";
import Navbar from "./navbar";
const ProductPage = () => {
  const products = useSelector((state) => state.productReducer);
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          {/* products container */}
          <div className="productContainer" id="lws-productContainer">
            <SingleProduct
              product={{
                id: "llauiendcle",
                imgUrl:
                  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                price: 1000,
                quantity: 500,
                name: "Product Name",
                category: "Product Category",
              }}
            />
            {products?.map((product, key) => {
              return <SingleProduct key={key} product={product} />;
            })}
            {/* {products.length === 0 && (
              <p>No products available please add new product.</p>
            )} */}
          </div>
          {/* products container ends */}
          <div>
            <ProductForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
