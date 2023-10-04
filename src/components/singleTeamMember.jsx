
const SingleTeamMember = ({member}) => {
  const {name, avatar} = member;
    return (
        <div className="checkbox-container">
          <img alt="img" src={avatar} className="team-avater" />
          <p className="label">{name}</p>
        </div>
    );
}

export default SingleTeamMember;
