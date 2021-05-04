import { NavLink } from "react-router-dom";
import Input from "../Input/Input";
import { StyledNavigationBar } from "./NavBarStyle";
// import { useState } from "react";

const NavBar = () => {
  return (
    <StyledNavigationBar>
      <ul>
        <li>
          <NavLink to="home" className={`navbar-item`} activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="movies" className={`navbar-item`}>
            MOVIES
          </NavLink>
        </li>
        <li>
          <NavLink to="series" className={`navbar-item`}>
            SERIES
          </NavLink>
        </li>
      </ul>
      <Input type="search" placeholder="Rechercher un film" />
    </StyledNavigationBar>
  );
};
export default NavBar;
