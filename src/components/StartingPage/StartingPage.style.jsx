import styled from "styled-components";

export const StyledStartingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  width: 100%;
  height: 83vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  margin-top: 3rem;

  &::after {
    content: "";
    background-size: cover;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background: url("${(props) => (props.urlImage ? props.urlImage : "")}");
    background-attachment: fixed;
    background-size: contain;
  }

  .welcomeText {
    color: #0275d8;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  }
  .text {
    color: #fff;
    font-size: 1.1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1.5rem;
  }
  
  @media only screen and (max-width:770px){
    .welcomeText {
    color: #0275d8;
    font-size: 2.3rem;
    font-weight: 700;
    text-align: center;
  }
  .text {
    color: #fff;
    font-size: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-align: center;
  }

  }
`;
