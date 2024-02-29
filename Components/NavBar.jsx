import { Link } from "react-router-dom";
import "../Styles/NavBar.modules.scss";

function NavBar() {
  return (
    <div className="NavBarWrapper">
      <Link to={`/`}>
        <h1>Pavlina Miklasova</h1>
      </Link>
    </div>
  );
}

export default NavBar;
