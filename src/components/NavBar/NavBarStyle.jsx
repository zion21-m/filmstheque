import styled from "styled-components";

// export const NavigationContainerStyled = styled.div`
//   border-color: #000;
// `;
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
`;
