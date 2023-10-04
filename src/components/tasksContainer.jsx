import SingleTask from "./singleTask";
import Loading from "./loading";
import Error from "./error";
import { useGetTasksQuery } from "../redux/features/task/tasksApi";
import { useSelector } from "react-redux";
const TasksContainer = ({ search }) => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  const { filteredProjects } = useSelector((state) => state.projects);

  // handle searching
  const filterBySearch = (item) => {
    if (item.taskName.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  };

  // handle project searching

  const filterByProjectTypes = (item) => {
    const name = item.project.projectName;
    if (filteredProjects.includes(name)) {
      return true;
    }
    return false;
  };
  return (
    <div className="lws-task-list">
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && tasks.length === 0 && (
        <h2>No Task List Found</h2>
      )}
      {!isLoading &&
        !isError &&
        tasks.length > 0 &&
        tasks
          .filter(filterByProjectTypes)
          .filter(filterBySearch)
          .map((task) => <SingleTask key={task.id} task={task} />)}
    </div>
  );
};

export default TasksContainer;
