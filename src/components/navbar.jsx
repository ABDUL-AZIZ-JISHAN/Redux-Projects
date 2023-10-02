import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSearch, search }) => {
  const [isactive , setIsActive] = useState(true);
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xxl font-bold text-black-700">
          RTK QUERY LIBRARY APP
        </Link>
        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className={isactive ? "font-semibold cursor-pointer": "cursor-pointer"}
            to="/"
            id="lws-bookStore"
            onClick={()=> setIsActive(!isactive)}
          >
            <li>Book Store</li>
          </Link>
          <Link className={!isactive ? "font-semibold cursor-pointer": "cursor-pointer"}  onClick={()=> setIsActive(!isactive)} to="/add" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>
        <div className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
