import { useGetProjectsQuery } from "../redux/features/projects/projectApi";
import SingleProject from "./singleProject";
import Loading from './loading';
import Error from './error';
const ProjectList = () => {
  const {data: projects, isLoading, isError } = useGetProjectsQuery();
  
    return (
        <div>
          <h3 className="text-xl font-bold">Projects</h3>
          <div className="mt-3 space-y-4">
            {isLoading && <Loading/>}
            {isError && <Error/>}
            {!isLoading && !isError && projects.length === 0 && <h2>No Project List Found</h2>}
            {!isLoading && !isError && projects.length > 0 && projects.map(project => <SingleProject key={project.id} project={project}/>)}
          </div>
        </div>
    );
}

export default ProjectList;
