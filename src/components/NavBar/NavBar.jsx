import { NavLink } from "react-router-dom";
import Input from "../Input/Input";
import { NavigationContainerStyled, StyledNavigationBar } from "./NavBarStyle";
// import { useState } from "react";

const NavBar = (props) => {
  return (
    <NavigationContainerStyled>
      <StyledNavigationBar>
        <ul>
          <li>
            <NavLink to="/home" className={`navbar-item`}>
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={`navbar-item`}>
              FILMS
            </NavLink>
          </li>
          <li>
            <NavLink to="/series" className={`navbar-item`}>
              SERIES
            </NavLink>
          </li>
        </ul>
        <Input
          type="search"
          placeholder="Rechercher un film"
          onChange={props.onChange}
          onClick={props.onClick}
        />
      </StyledNavigationBar>
    </NavigationContainerStyled>
  );
};
export default NavBar;
