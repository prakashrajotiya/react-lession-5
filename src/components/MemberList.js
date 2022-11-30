import MemberCard from "./membercard";
import MemberData from "../../data";

const MemberList = () => {
  const memberList = MemberData.map((member) => {
    return <MemberCard member={member} key={member.id} />;
  });
  return memberList;
};
export default MemberList;
