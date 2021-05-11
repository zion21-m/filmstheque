import styled from "styled-components";

// export const NavigationContainerStyled = styled.div`
//   border-color: #000;
// `;
export const StyledNavigationBar = styled.div`
  /* background-color: #000000; */
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  li {
    display: inline-block;
    list-style: none;
    padding: 0.8rem;
  }
  .navbar-item {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
  }
  .active {
    color: #ffa106;
    /* font-weight: bold; */
    border-bottom: 2px solid #ffa106;
    padding-bottom: 0.5rem;
  }
  .navbar-item:hover {
    color: #ffa106;
  }
`;
