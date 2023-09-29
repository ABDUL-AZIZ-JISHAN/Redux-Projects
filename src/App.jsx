import BookForm from "./component/bookForm";
import BooksWrapper from "./component/booksWrapper";
import Navbar from "./component/navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";

const App = () => {
  const [activeButton, setActiveButton] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  return (
    <Provider store={store}>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setActiveButton("all")}
                  className={
                    activeButton === "all"
                      ? "active-filter filter-btn"
                      : "filter-btn"
                  }
                  id="lws-filterAll"
                >
                  All
                </button>
                <button
                  onClick={() => setActiveButton("featured")}
                  className={
                    activeButton === "featured"
                      ? "active-filter filter-btn"
                      : "filter-btn"
                  }
                  id="lws-filterFeatured"
                >
                  Featured
                </button>
              </div>
            </div>
            <BooksWrapper
              searchValue={searchValue}
              activeButton={activeButton}
            />
          </div>
          <BookForm />
        </div>
      </main>
    </Provider>
  );
};

export default App;
