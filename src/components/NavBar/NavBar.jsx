import { NavLink } from "react-router-dom";
import Input from "../Input/Input";
import { StyledNavigationBar } from "./NavBarStyle";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    //   <div className="container d-none d-lg-block">
    //     {/* <NavigationContainerStyled> */}
    //     <div className="row">
    //       <div className="col-lg-12">
    //         <StyledNavigationBar>
    //           <ul>
    //             <li>
    //               <NavLink to="/home" className={`navbar-item`}>
    //                 ACCUEIL
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/movies" className={`navbar-item`}>
    //                 FILMS
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/series" className={`navbar-item`}>
    //                 SERIES
    //               </NavLink>
    //             </li>
    //           </ul>
    //           <Input
    //             type="search"
    //             placeholder="Rechercher un film"
    //             onChange={props.onChange}
    //             onClick={props.onClick}
    //           />
    //         </StyledNavigationBar>
    //       </div>
    //     </div>
    //     {/* </NavigationContainerStyled> */}
    //   </div>
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <div className="container">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
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
                  FILM
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/series" className="navbar-item">
                  SERIES
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <Input
                  type="search"
                  placeholder="Rechercher un film"
                  onChange={props.onChange}
                  onClick={props.onClick}
                />
              </Nav.Link>
            </Nav>
            {/* <Nav></Nav> */}
            {/* <Nav></Nav> */}
          </StyledNavigationBar>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
