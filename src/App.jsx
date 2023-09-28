import CartPage from "./component/cartPage";
import ProductPage from "./component/productPage";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
         <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
