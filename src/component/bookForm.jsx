import { useEffect, useState } from "react";
import addBooks from "../redux/book/thunk/addBooks";
import { useDispatch, useSelector } from "react-redux";
import { clearBookFormAction } from "../redux/bookUpdate/action";
import updateBook from "../redux/book/thunk/updateBook";
const BookForm = () => {

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.bookUpdateReducer);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [isFeatured, setIsFeatured] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [isFormActive, setIsFormActive] = useState(false);
  
  useEffect(() => {
    setName(formData.name);
    setAuthor(formData.author);
    setImgUrl(formData.imgUrl);
    setPrice(formData.price);
    setRating(formData.rating);
    setIsFeatured(formData.isFeatured);
    setIsFormActive(formData.isActive);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { name, author, rating, isFeatured, imgUrl, price };
    dispatch(addBooks(newBook));
    setName("");
    setAuthor("");
    setRating("");
    setIsFeatured(true);
    setPrice("");
    setImgUrl("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = formData.id;
    const updatedBook = { name, author, rating, isFeatured, imgUrl, price, id };
    dispatch(updateBook(updatedBook));
    dispatch(clearBookFormAction());
    setName("");
    setAuthor("");
    setRating("");
    setIsFeatured(true);
    setPrice("");
    setImgUrl("");
  };
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">
          {isFormActive ? "Update" : "Add New"} Book
        </h4>
        <form
          onSubmit={isFormActive ? handleUpdate : handleSubmit}
          className="book-form"
        >
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min={1}
                max={5}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>
          <button type="submit" className="submit" id="submit">
            {isFormActive ? "Update Now" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
