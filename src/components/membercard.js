const MemberCard = (props) => {
  return (
    <div className="membercard">
      <img src={props.member.avatar} />
      <div className="membercard-info">
        <h2>{props.member.name}</h2>
        <p>{props.member.designation}</p>
      </div>
    </div>
  );
};
export default MemberCard;
