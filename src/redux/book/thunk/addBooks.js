import uniqid from "uniqid";
import { loadBooksAction } from "../action";

const addBooks = (book) => {
  return async (dispatch) => {
    let post = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({ ...book, id: uniqid() }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (post.ok) {
      let response = await fetch("http://localhost:9000/books");
      let books = await response.json();
      dispatch(loadBooksAction(books));
    }
  };
};
export default addBooks;
