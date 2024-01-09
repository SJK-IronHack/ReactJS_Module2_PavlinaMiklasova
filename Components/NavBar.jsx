import { Link } from "react-router-dom";
import "../Styles/NavBar.modules.scss";

function NavBar() {
  return (
    <>
      <Link to={`/`}>
        <h1>Home</h1>
      </Link>
    </>
  );
}

export default NavBar;
