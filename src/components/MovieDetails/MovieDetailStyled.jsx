import styled from "styled-components";

export const MovieDetailStyled = styled.div`
  display: flex;
  padding: 5rem 0.5rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;

  &::after {
    content: "";
    background: url("${(props) => (props.urlImage ? props.urlImage : "")}");
    background-size: cover;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
export const MovieDetailsLeftSide = styled.div`
  width: 30vw;
  padding: 1.5rem 1rem;
`;
export const MovieImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const TitleStyled = styled.h1`
  font-size: 2.5rem;
  font-size: bold;
  .releaseDate {
    font-weight: 400;
  }
`;
export const MovieRightSide = styled.div`
  width: 70vw;
  font-size: 1.2rem;
  padding: 1.5rem 1rem;
  text-align: justify;
  .synosis {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
export const RecommandationSection = styled.section`
  background-color: #e5e5e5;
  padding: 4rem 1rem;
  h1 {
    font-size: 2rem;
    margin-left: 3.5rem;
    margin-bottom: 2rem;
  }
`;
export const RecommandationStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
