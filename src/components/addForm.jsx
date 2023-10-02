import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../redux/features/api/APISlice";

const AddForm = () => {
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(true);

  const resetForm = () => {
    setName("");
    setAuthor("");
    setPrice("");
    setFeatured(true);
    setRating("");
    setThumbnail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { name, author, thumbnail, price, rating, featured };
    addBook(newBook);
  };

  useEffect(() => {
    if (isSuccess) {
      resetForm();
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="space-y-2">
          <label htmlFor="lws-bookName">Book Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-input"
            type="text"
            id="lws-bookName"
            name="name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-author">Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="text-input"
            type="text"
            id="lws-author"
            name="author"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-thumbnail">Image Url</label>
          <input
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
            className="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="lws-price">Price</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="text-input"
              type="number"
              id="lws-price"
              name="price"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-rating">Rating</label>
            <input
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              className="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min={1}
              max={5}
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            id="lws-featured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="lws-featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="submit"
          id="lws-submit"
        >
          Edit Book
        </button>
      </form>
      {isError && (
        <h2 style={{ color: "red", margin: "10px 0" }}>
          Something went Wrong to submit
        </h2>
      )}
    </>
  );
};

export default AddForm;
