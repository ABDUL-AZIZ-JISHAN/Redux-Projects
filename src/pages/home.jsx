import { useEffect, useState } from "react";
import SingleBlogCard from "../component/singleBlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/features/posts/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );



  const [selectedOption, setSelectedOption] = useState("");
  const [filter, setFilter] = useState(false); 
  

  useEffect(() => {
    dispatch(fetchPost());
  }, [useDispatch, fetchPost]);

  const handleFilter = (item) =>{
    if(filter){
      return item.isSaved === true;
    }
    return item;
  }

  const handleSorting = (a, b) => {
    if (selectedOption === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (selectedOption === 'most_liked') {
      return b.likes - a.likes;
    }
    return 0;
  };

  return (
    <section className="wrapper">
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              value={selectedOption}
              onChange={(e)=> setSelectedOption(e.target.value)}
            >
              <option value="all">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              {/* handle filter on button click */}
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  defaultChecked
                  className="radio"
                  checked={!filter}
                  onChange={()=> setFilter(!filter)}
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                  checked={filter}
                  onChange={()=> setFilter(!filter)}
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="post-container" id="lws-postContainer">
        {isError && <h2 className="text-xl">{error}</h2>}
        {isLoading && <h2 className="text-xl">Fetching Blogs...</h2>}
        {posts.length === 0 ? (
          <h2 className="text-xl">No Blogs Available</h2>
        ) : (
          posts.filter(handleFilter).sort(handleSorting).map((blog) => {
            return <SingleBlogCard key={blog.id} blog={blog} />;
          })
        )}
      </main>
    </section>
  );
};

export default Home;
