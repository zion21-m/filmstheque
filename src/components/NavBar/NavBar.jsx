import { NavLink } from "react-router-dom";
import Input from "../Input/Input";
import { StyledNavigationBar, StyledLogo } from "./NavBarStyle";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <div className="container">
        <Navbar.Brand href="#home">
          <StyledLogo to="/home" className="link-style">
            Nuru-films
          </StyledLogo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <StyledNavigationBar>
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/home" className="navbar-item">
                  ACCUEIL
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/movies" className="navbar-item">
                  FILMS
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/series" className="navbar-item">
                  SERIES
                </NavLink>
              </Nav.Link>

              <Input
                type="search"
                placeholder="Rechercher un film ou une série"
                onChange={props.onChange}
                onClick={props.onClick}
              />
            </Nav>
          </StyledNavigationBar>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
