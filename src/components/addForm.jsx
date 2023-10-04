import { useEffect, useState } from "react";
import { useGetTeamMembersQuery } from "../redux/features/teamMembers/teamMemberApi";
import { useGetProjectsQuery } from "../redux/features/projects/projectApi";
import uniqid from 'uniqid';
import { useAddTaskMutation } from "../redux/features/task/tasksApi";
import { useNavigate } from "react-router-dom";
import Error from './error'
const AddForm = () => {
  const { data: teamMembers } = useGetTeamMembersQuery();
  const { data: projects } = useGetProjectsQuery();
  const [ addTask , {isLoading ,isSuccess,  isError, error}] = useAddTaskMutation();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [assign, setAssign] = useState({});
  const [project, setProject] = useState("");
  const [deadline, setDeadLine] = useState("");

  let selectColor;

  switch (project) {
    case "Scoreboard":
      selectColor = "color-scoreboard";
      break;
    case "Flight Booking":
      selectColor = "color-flight";
      break;
    case "Product Cart":
      selectColor = "color-productCart";
      break;
    case "Book Store":
      selectColor = "color-bookstore";
      break;
    case "Blog Application":
      selectColor = "color-blog";
      break;
    default:
      selectColor = "color-jobFinder";
      break;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      id: uniqid(),
      taskName,
      teamMember: JSON.parse(assign),
      project: {id: uniqid(), projectName: project, colorClass: selectColor },
      deadline,
      status: "pending",
    };
    addTask(newTask);
  };

  useEffect(() => {
    if(isSuccess === true){
      setAssign("");
      setProject("");
      setTaskName("");
      setDeadLine("");
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>
        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label htmlFor="lws-taskName">Task Name</label>
              <input
                type="text"
                name="taskName"
                id="lws-taskName"
                required
                placeholder="Implement RTK Query"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="fieldContainer">
              <label>Assign To</label>
              <select
                value={assign}
                onChange={(e) => setAssign(e.target.value)}
                name="teamMember"
                id="lws-teamMember"
                required
              >
                <option>Select Member</option>
                {teamMembers?.map((member) => {
                  return (
                    <option value={JSON.stringify(member)} key={member.id}>
                      {member.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-projectName">Project Name</label>
              <select
                id="lws-projectName"
                name="projectName"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                required
              >
                <option>Select Project</option>
                {projects?.map((project) => {
                  return (
                    <option value={project.projectName} key={project.id}>
                      {project.projectName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-deadline">Deadline</label>
              <input
                value={deadline}
                onChange={(e) => setDeadLine(e.target.value)}
                type="date"
                name="deadline"
                id="lws-deadline"
                required
              />
            </div>
            <div className="text-right">
              <button disabled={isLoading} type="submit" className="lws-submit">
                Save Task
              </button>
            </div>
          </form>
        </div>
        {isError && <Error/>}
      </main>
    </div>
  );
};

export default AddForm;
