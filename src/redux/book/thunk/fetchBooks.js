import { loadBooksAction } from "../action";

const fetchBooks = async (dispatch) => {
   let response = await fetch("http://localhost:9000/books");
   let books = await response.json();
   dispatch(loadBooksAction(books));
}

export default fetchBooks;