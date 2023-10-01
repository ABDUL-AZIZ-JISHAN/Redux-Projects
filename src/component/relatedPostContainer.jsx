import { useDispatch, useSelector } from "react-redux";
import SingleRelatedPost from "./singleRelatedPost";
import { useEffect } from "react";
import { fetchRelatedPost } from "../redux/features/relatedPosts/relatedPostSlice";

const RelatedPostContainer = ({post}) => {
  const dispatch = useDispatch();
  const {relatedPosts, isLoading, isError, error} = useSelector(state => state.relatedPosts);

  useEffect(()=>{
    if(post.length !== 0){
    dispatch(fetchRelatedPost({id:post.id, tags:post.tags}))
    }
  },[dispatch, post]);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
      {isError && <h2 className="text-xl">{error}</h2>}
        {isLoading && <h2 className="text-xl">Fetching Blogs...</h2>}
        {relatedPosts.length === 0 ? (
          <h2 className="text-xl">No Blogs Available</h2>
        ) : (
          relatedPosts.map((blog) => {
            return <SingleRelatedPost key={blog.id} blog={blog} />;
          })
        )}
      </div>
    </aside>
  );
};

export default RelatedPostContainer;
