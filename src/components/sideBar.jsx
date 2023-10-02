import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router";
import { useDispatch } from "react-redux";
import {
  fullTimeJobs,
  remoteJobs,
  internJobs,
  resetFilterJobs,
} from "../redux/features/job/jobSlice";
const SideBar = () => {
  const navigate = useNavigate();
  const isInHomePage = useMatch("/");
  const dispatch = useDispatch();

  const [activeLink, setActiveLink] = useState("all");

  const handleClick = async (name) => {
    setActiveLink(name);
    if (!isInHomePage) {
      navigate("/");
    }
    if (name === "Internship") {
      dispatch(internJobs());
    } else if (name === "full-time") {
      dispatch(fullTimeJobs());
    } else if (name === "remote") {
      dispatch(remoteJobs());
    } else {
      dispatch(resetFilterJobs());
    }
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => handleClick("all")}
              className={
                activeLink === "all" ? "main-menu menu-active" : "main-menu"
              }
              id="lws-alljobs-menu"
            >
              <i className="mr-10 fa-solid fa-briefcase" />
              <span> All Available Jobs</span>
            </button>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <button
                  onClick={() => handleClick("Internship")}
                  className={
                    activeLink === "Internship"
                      ? "sub-menu menu-active"
                      : "sub-menu"
                  }
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]" />
                  Internship
                </button>
              </li>
              <li>
                <button
                  className={
                    activeLink === "full-time"
                      ? "sub-menu menu-active"
                      : "sub-menu"
                  }
                  onClick={() => handleClick("full-time")}
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]" />
                  Full Time
                </button>
              </li>
              <li>
                <button
                  className={
                    activeLink === "remote"
                      ? "sub-menu menu-active "
                      : "sub-menu"
                  }
                  onClick={() => handleClick("remote")}
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]" />
                  Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/post" className="main-menu" id="lws-addJob-menu">
              <i className="mr-10 fa-solid fa-file-circle-plus" />
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
