import { useDispatch, useSelector } from "react-redux";
import SingleJob from "./singleJob";
import { useEffect, useState } from "react";
import { fetchJobs } from "../redux/features/job/jobSlice";

const HomeContent = () => {
  const { filteredJobs, jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();

  // handling search results
  const [search, setSearch] = useState("");

  const handleSearch = (item) => {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
    return false;
  };

  // handling salary selection filter;
  const [selectedSalary, setSelectedSalary] = useState("");

  const handleSalaryFilter = (a, b) => {
    if (selectedSalary === "descending") {
      return b.salary - a.salary;
    }
    if (selectedSalary === "ascending") {
      return a.salary - b.salary;
    }
    return 0;
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  let loadJobElements = filteredJobs.length > 0 ? filteredJobs : jobs;

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 className="lws-section-title">{filteredJobs.length > 0 ? filteredJobs[0].type :"All Available"} Jobs</h1>
          <div className="flex gap-4">
            <div className="search-field group flex-1">
              <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search Job"
                className="search-input"
                id="lws-searchJob"
              />
            </div>
            <select
              value={selectedSalary}
              onChange={(e) => setSelectedSalary(e.target.value)}
              id="lws-sort"
              name="sort"
              autoComplete="sort"
              className="flex-1"
            >
              <option value="all">Default</option>
              <option value="ascending">Salary (Low to High)</option>
              <option value="descending">Salary (High to Low)</option>
            </select>
          </div>
        </div>
        <div className="jobs-list">
          {isLoading && (
            <h2 className="text-white font-bold">Fetching Jobs...</h2>
          )}
          {isError && <h2 className="text-white font-bold">Something went Wrong. Please check your server is it running or not.</h2>}
          {jobs.length > 0 &&
            loadJobElements
              .filter(handleSearch)
              .sort(handleSalaryFilter)
              .map((job) => {
                return <SingleJob key={job.id} job={job} />;
              })}
        </div>
      </main>
    </div>
  );
};

export default HomeContent;
