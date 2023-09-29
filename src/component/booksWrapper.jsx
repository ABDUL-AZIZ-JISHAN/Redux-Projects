import { useEffect } from "react";
import SingleBook from "./singleBook";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/book/thunk/fetchBooks";

const BooksWrapper = ({activeButton, searchValue}) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const filterBook = (book) =>{
    if(activeButton === "all"){
      return book;
    }else{
      return book.isFeatured ;
    }
  }
  
  const handleSearch = (book) =>{
    if(book.name.toLowerCase().includes(searchValue)){
      return book;
    }else{
      return false;
    }
  }
  return (
    <div className="lws-bookContainer">
      {books.filter(filterBook).filter(handleSearch).map((book, index) => {
        return <SingleBook key={index} book={book} />;
      })}
      {books.length === 0 && "Please check your server is running or not Otherwise add new book to show the list."}
    </div>
  );
};

export default BooksWrapper;
