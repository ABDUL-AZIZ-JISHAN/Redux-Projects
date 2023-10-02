import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteJob } from "../redux/features/job/jobSlice";
const SingleJob = ({ job }) => {
  const dispatch = useDispatch();
  let style;

  if (job.type === "Internship") {
    style = "fa-solid fa-stop !text-[#FF5757] text-lg mr-1.5";
  } else if (job.type === "Remote") {
    style = "fa-solid fa-stop !text-[#56E5C4] text-lg mr-1.5";
  } else {
    style = "fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5";
  }

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{job.title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i className={style} />
            {job.type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5" />
            BDT {job.salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5" />
            Closing on {job.deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link
            to={`edit/${job.title}`}
            state={job}
            type="button"
            className="lws-edit btn btn-primary"
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2" />
            Edit
          </Link>
        </span>
        <span className="sm:ml-3">
          <button
            onClick={() => dispatch(deleteJob(job.id))}
            type="button"
            className="lws-delete btn btn-danger "
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2" />
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleJob;
