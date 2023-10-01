import RelatedPostContainer from "../component/relatedPostContainer";
import SinglePost from "../component/singlePost";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../redux/features/post/postSlice";
import { useParams } from "react-router-dom";


const Post = () => {
   const {postId} = useParams();
  const dispatch = useDispatch();
  const { post, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog(postId));
  }, [dispatch, fetchBlog, postId]);


  return (
      <section className="post-page-container">
      {isError && <h2 className="text-xl">{error}</h2>}
        {isLoading && <h2 className="text-xl">Fetching Blogs...</h2>}
        {post.length === 0 ? (
          <h2 className="text-xl">No Blogs Available</h2>
        ) : <SinglePost post={post}/>}
        <RelatedPostContainer post={post} />
      </section>
  );
};

export default Post;
