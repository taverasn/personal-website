// Styling Imports
import styled from "styled-components";

// React Components
import { Link } from "react-router-dom";
import SideBar from "../SideBar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-family: "Pacifico", cursive;
    text-decoration: none;
    font-size: 25px;
    color: black;
  }
  a:hover {
    color: white;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = (props) => {
  return (
    <StyledHeader className="navbar-fixed">
      <nav className="nav-wrapper yellow">
        <ul>
          <div>
            <li>
              <Link to="/">Nicholas Taveras</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact Info</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </div>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
