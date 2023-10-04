import { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../redux/features/projects/projectApi";
import { useGetTeamMembersQuery } from "../redux/features/teamMembers/teamMemberApi";
import { useParams } from "react-router";
import { useEditTaskMutation, useGetTaskQuery } from "../redux/features/task/tasksApi";
import Error from "./error";
import Loading from "./loading";


const EditForm = () => {
  const {id} = useParams();

  // get teamMembers list from api
   const { data: teamMembers } = useGetTeamMembersQuery();
     // get projects list from api
  const { data: projects } = useGetProjectsQuery();


    const [taskName , setTaskName] = useState("");
    const [assign, setAssign] = useState("");
    const [project, setProject] = useState(""); 
    const [deadline, setDeadLine] = useState(""); 


    const [isSkipped, setIsSkipped] = useState(true);
    
    // get existing form data from api 
    const {data: formData, isError} = useGetTaskQuery(id,{
      skip: isSkipped
    });


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


    // update the form data 
    const [editTask, {isSuccess: uploadSuccess, isError: uploadError}] = useEditTaskMutation();

    const handleSubmit = async (e) => {
      e.preventDefault();
       const updatedTask = {
        ...formData,
        taskName,
        deadline,
        teamMember: JSON.parse(assign),
        project: {  ...formData.project,  projectName: project, colorClass: selectColor }
       }
       editTask({id, data: updatedTask});
    };



    useEffect(()=>{
      if(id){
        setIsSkipped(false);
      }
      if(formData){
        setTaskName(formData.taskName);
        setAssign(JSON.stringify(formData.teamMember));
        setProject(formData.project.projectName);
        setDeadLine(formData.deadline);
      }
    },[formData, id])

    return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Edit Task for Your Team
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
                onChange={(e)=> setTaskName(e.target.value)}
              />
            </div>
            <div className="fieldContainer">
              <label>Assign To</label>
              <select
              value={assign}
              onChange={(e)=> setAssign(e.target.value)}
               name="teamMember" id="lws-teamMember" required>
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
              <select id="lws-projectName" name="projectName" value={project}
                onChange={(e)=> setProject(e.target.value)} required>
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
              <input value={deadline}
                onChange={(e)=> setDeadLine(e.target.value)} type="date" name="deadline" id="lws-deadline" required />
            </div>
            <div className="text-right">
              <button type="submit" className=" lws-submit">
                Save Edit
              </button>
            </div>
          </form>
        </div>
        {uploadSuccess && <Loading title={"Successfully updated"} />}
        {isError && <Error/>}
      </main>
    </div>
  );
};

export default EditForm;
