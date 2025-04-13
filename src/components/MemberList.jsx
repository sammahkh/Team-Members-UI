import React from "react";
import MemberItem from "./MemberItem";

function MemberList({ members }) {
  return (
    <div className="member-list">
      {members.map((member) => (
        <MemberItem key={member.id} name={member.name} />
      ))}
    </div>
  );
}

export default MemberList;
