import SingleTeamMember from "./singleTeamMember";
import { useGetTeamMembersQuery } from "../redux/features/teamMembers/teamMemberApi";
import Loading from './loading';
import Error from './error';

const TeamMemberList = () => {

  const {data: members, isLoading, isError} = useGetTeamMembersQuery();

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">
      {isLoading && <Loading/>}
            {isError && <Error/>}
            {!isLoading && !isError && members.length === 0 && <h2>No Project List Found</h2>}
            {!isLoading && !isError && members.length > 0 && members.map(member => <SingleTeamMember key={member.id} member={member}/>)}
      </div>
    </div>
  );
};

export default TeamMemberList;
