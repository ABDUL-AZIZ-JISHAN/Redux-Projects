
import { loadBooksAction } from "../action";

const updateBook = (book) =>{
    return async (dispatch) =>{
        let res = await fetch(`http://localhost:9000/books/${book.id}`,  {
            method: 'PATCH',
            body: JSON.stringify({...book}),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          if(res.ok){
            let response = await fetch("http://localhost:9000/books");
            let books = await response.json();
            dispatch(loadBooksAction(books));
          }
    }
}

export default updateBook;