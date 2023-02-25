import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div>
          <h2>The Artifact</h2>
        </div>
        <div>
          <h3>
            <em>Culture & Art blog</em>
          </h3>
        </div>
        <div className="nav">
          <ul className="list">
            <li id="l1" onClick={() => navigate("/error")}>
              Blog
            </li>
            <li id="l1" onClick={() => navigate("*")}>
              About
            </li>
            <li id="l1" onClick={() => navigate("/error")}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
