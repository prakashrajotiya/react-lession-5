import ReactDOM from "react-dom/client";
import MemberList from "./components/MemberList";
import SearchBar from "./components/searchBar";
import data from "../data.json";
import "./app.css";
import { useState } from "react";

const Main = () => {
  const [memberData, setmemberData] = useState(data);

  return (
    <div className="main">
      <div className="searchbar">
        <SearchBar setmemberData={setmemberData} />
      </div>
      <div className="container">
        <div className="memberlist">
          <MemberList memberData={memberData} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
