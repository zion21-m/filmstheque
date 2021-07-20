import styled from "styled-components";
import { Link } from "react-router-dom";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>;

export const StyledNavigationBar = styled.div`
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  text-align: right;
  @media (max-width: 992px) {
    .mr-auto {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .navbar-item {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
  }
  .active {
    color: #ffa106;
    border-bottom: 2px solid #ffa106;
    padding-bottom: 0.5rem;
  }
  .navbar-item:hover {
    color: #ffa106;
  }
  .link-style {
    text-decoration: none;
    border: 1px solid white;
  }
`;
export const StyledLogo = styled(Link)`
  font-family: "Lobster", cursive;
  font-style: italic;
  color: #ffa106;
  text-decoration-style: none;
  font-weight: bold;
  font-size: 1.5rem;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: #ffa106;
  }
`;
