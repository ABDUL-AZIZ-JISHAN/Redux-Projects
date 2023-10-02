import { useState } from "react";
import { useDispatch } from "react-redux";

import { postJob } from "../redux/features/job/jobSlice.js";
import { useNavigate } from "react-router-dom";
const PostJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectRole, setSelectRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadLine] = useState("");

  const resetForm = () => {
    setSelectRole("");
    setJobType("");
    setSalary("");
    setDeadLine("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { title: selectRole, type: jobType, salary, deadline };
    dispatch(postJob(newJob));
    resetForm();
    navigate("/");
  };
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                value={selectRole}
                onChange={(e) => setSelectRole(e.target.value)}
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
              >
                <option hidden>Select Job</option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select
                onChange={(e) => setJobType(e.target.value)}
                value={jobType}
                id="lws-JobType"
                name="lwsJobType"
                required
              >
                <option>Select Job Type</option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                />
              </div>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadLine(e.target.value)}
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PostJob;
