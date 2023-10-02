import { useState } from "react";
import SingleBook from "../components/singleBook";
import { useGetBooksQuery } from "../redux/features/api/APISlice";

const Home = ({ search }) => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  // filter handling
  const [filterBy, setFilterBy] = useState("all");
  const handleFilter = (item) => {
    if (filterBy === "all") {
      return item;
    }
    if (filterBy === "featured") {
      return item.featured;
    }
    return 0;
  };
  // search handling
  const handleSearch = (item) => {
    if (search) {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilterBy("all")}
              className={
                filterBy === "all"
                  ? "lws-filter-btn active-filter"
                  : "lws-filter-btn"
              }
            >
              All
            </button>
            <button
              onClick={() => setFilterBy("featured")}
              className={
                filterBy === "featured"
                  ? "lws-filter-btn active-filter"
                  : "lws-filter-btn"
              }
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {isLoading && <h2 className="font-bold">Fetching Books...</h2>}
          {isError && (
            <h2 className="font-bold">
              Something went Wrong to fetch data. please check your server
            </h2>
          )}
          {books?.length === 0 && (
            <h2 className="font-bold">No books available.</h2>
          )}
          {books?.length > 0 &&
            books
              .filter(handleFilter)
              .filter(handleSearch)
              .map((book) => <SingleBook key={book.id} book={book} />)}
        </div>
      </div>
    </main>
  );
};

export default Home;
