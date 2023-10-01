import React from "react";
import { Link } from "react-router-dom";

const SingleBlogCard = ({ blog }) => {
  return (
    <div className="lws-card">
      <Link to={`post/${blog.id}`}>
        <img src={blog.image} className="lws-card-image" alt="blog-img" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{blog.createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up" />
             {` ${blog.likes}`}
          </p>
        </div>
        <Link to={`post/${blog.id}`} className="lws-postTitle">
          {" "}
          {blog.title}{" "}
        </Link>
        <div className="lws-tags">
          {blog.tags.map((tag, index) => {
            return <span key={index}>#{tag},</span>;
          })}
        </div>
        {/* Show this element if post is saved */}
        <div className="flex gap-2 mt-4">
          {blog.isSaved && <span className="lws-badge"> Saved </span>}
        </div>
        {/* Show this element if post is saved Ends */}
      </div>
    </div>
  );
};

export default SingleBlogCard;
