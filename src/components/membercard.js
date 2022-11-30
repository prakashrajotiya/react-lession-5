const MemberCard = (props) => {
  return (
    <div className="membercard">
      <img src={props.member.avatar} />
      <h2>{props.member.name}</h2>
      <p>{props.member.designation}</p>
    </div>
  );
};
export default MemberCard;
