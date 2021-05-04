import styled from "styled-components";

export const StyledNavigationBar = styled.div`
  background-color: #000;
  padding: 0.5rem;
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
`;
