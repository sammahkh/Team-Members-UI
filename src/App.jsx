import React from "react";
import SearchBar from "./components/SearchBar";
import MemberList from "./components/MemberList";
import Button from "./components/Button";
import membersData from "./members.json";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1>Add members to Front-end development team</h1>
      <SearchBar />
      <MemberList members={membersData.members} />
      <div className="buttons-container">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">SAVE</Button>
      </div>
    </div>
  );
}

export default App;
