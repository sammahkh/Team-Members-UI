import React from "react";
import { FaUser } from "react-icons/fa";

function MemberItem({ name }) {
  return (
    <div className="member-item">
      <div className="user-icon">
        <FaUser />
      </div>
      <span>{name}</span>
      <input type="checkbox" className="select-checkbox " />
    </div>
  );
}

export default MemberItem;
