import styled from "styled-components";

export const NavigationContainerStyled = styled.div`
  border-color: #000;
`;
export const StyledNavigationBar = styled.div`
  background-color: #000000;
  padding-right: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  li {
    display: inline-block;
    list-style: none;
    padding: 0.5rem;
  }
  .navbar-item {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
  }
  .active {
    color: #ffa106;
    border-bottom: 1px solid #ffa106;
  }
  .navbar-item:hover {
    color: #ffa106;
  }
`;
