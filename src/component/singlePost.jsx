import { useDispatch } from "react-redux";
import { toggleSaved } from "../redux/features/post/postSlice";
import { incrementLike } from './../redux/features/post/postSlice';
import { useEffect, useState } from "react";
const SinglePost = ({ post }) => {
  const dispatch = useDispatch();

  const handleSaved = () =>{
    dispatch(toggleSaved(post.id));
  }

  const [like, setLike] = useState("");

  useEffect(()=>{
    setLike(post.likes);
  },[post])
  
  const handleLike = () =>{
    setLike(like + 1);
    dispatch(incrementLike(post.id))
  }

  return (
    <main className="post">
      <img
        src={post.image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {post.title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {post.tags.map((title, index) => {
            return <span key={index}>#{title},</span>;
          })}
        </div>
        <div className="btn-group">
          {/* handle like on button click */}
          <button onClick={handleLike} className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up" />  {like}
          </button>
          {/* handle save on button click */}
          {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
          <button onClick={handleSaved} className= {post.isSaved ? "active save-btn" :"save-btn"} id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark" />
            {post.isSaved ? " Saved" : " Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{post.description}</p>
        </div>
      </div>
    </main>
  );
};

export default SinglePost;
