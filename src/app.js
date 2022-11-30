import ReactDOM from "react-dom/client";
import MemberList from "./components/MemberList";
import "./app.css";

const Main = () => {
  return (
    <div className="memberlist">
      <MemberList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
