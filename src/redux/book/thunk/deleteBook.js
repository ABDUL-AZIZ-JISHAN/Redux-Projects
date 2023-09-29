import { loadBooksAction } from "../action";

const deleteBook = (id) => {
  return async (dispatch) => {
    let deleteBook = await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    });
    if (deleteBook.ok) {
      let response = await fetch("http://localhost:9000/books");
      let books = await response.json();
      dispatch(loadBooksAction(books));
    }
  };
};
export default deleteBook;
