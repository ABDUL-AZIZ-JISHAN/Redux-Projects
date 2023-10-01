import { Link } from "react-router-dom";

const SingleRelatedPost = ({blog}) => {
    return (
        <div className="card">
          <Link to={`/post/${blog.id}`}>
            <img src={blog.image} className="card-image" alt="blog-img" />
          </Link>
          <div className="p-4">
            <Link to={`/post/${blog.id}`} className="text-lg post-title lws-RelatedPostTitle">
              {blog.title}
            </Link>
            <div className="mb-0 tags">
            {blog.tags.map((title, index) => {
            return <span key={index}>#{title},</span>;
          })}
            </div>
            <p>{blog.createdAt}</p>
          </div>
        </div>
    );
}

export default SingleRelatedPost;
