import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBookQuery, useUpdateBookMutation } from "../redux/features/api/APISlice";

const EditForm = () => {
 const {id} = useParams();
  const navigate = useNavigate("");
  const [updateBook, {isLoading : updateLoading, isSuccess : updateSuccess, isError: updateError}] = useUpdateBookMutation();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(true);

  const {data: book, isLoading, isError} = useGetBookQuery(id, {
    // refetchOnMountOrArgChange: true,
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    const updatedBook = {name, author, thumbnail, price, rating, featured};
    updateBook({id, data: updatedBook})
  }

  useEffect(()=>{
    if(book){
      setName(book.name);
    setAuthor(book.author);
    setPrice(book.price);
    setFeatured(book.featured);
    setRating(book.rating);
    setThumbnail(book.thumbnail);
    }
  },[id, book]);

  const content = !isLoading ? <><form onSubmit={handleSubmit} className="book-form">
  <div className="space-y-2">
    <label htmlFor="lws-bookName">Book Name</label>
    <input value={name} onChange={(e) => setName(e.target.value)} required className="text-input" type="text" id="lws-bookName" name="name" />
  </div>
  <div className="space-y-2">
    <label htmlFor="lws-author">Author</label>
    <input value={author} onChange={(e) => setAuthor(e.target.value)} required className="text-input" type="text" id="lws-author" name="author" />
  </div>
  <div className="space-y-2">
    <label htmlFor="lws-thumbnail">Image Url</label>
    <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
  </div>
  <div className="grid grid-cols-2 gap-8 pb-4">
    <div className="space-y-2">
      <label htmlFor="lws-price">Price</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} required className="text-input" type="number" id="lws-price" name="price" />
    </div>
    <div className="space-y-2">
      <label htmlFor="lws-rating">Rating</label>
      <input value={rating} onChange={(e) => setRating(e.target.value)} required className="text-input" type="number" id="lws-rating" name="rating" min={1} max={5} />
    </div>
  </div>
  <div className="flex items-center">
    <input checked={featured} onChange={(e) => setFeatured(e.target.checked)} id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
    <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
  </div>
  <button disabled={updateLoading} type="submit" className="submit" id="lws-submit">Edit Book</button>
</form> {updateSuccess &&  <h2 style={{ color: "green", margin: "10px 0" }}>
          SuccessFully Updated
        </h2>} {updateError &&  <h2 style={{ color: "red", margin: "10px 0" }}>
          Something went Wrong to submit
        </h2>} </> : <h2>Fetching form data...</h2>

    return (isError ? <h2>Something went wrong to fetch form data.</h2> : content);
}

export default EditForm;
