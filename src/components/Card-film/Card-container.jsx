import styled from "styled-components";
const CardContainerStyled = styled.div`
  height: auto;
  width: 20vw;
  .imgContainer {
    width: 20vw;
  }
  .imgContainer img {
    width: 20vw;
  }
  .movieDetails {
    font-size: 1rem;
  }
`;
const CardContainer = ({
  src,
  alt,
  title,
  duration,
  voteAverage,
  popularity,
}) => {
  return (
    <CardContainerStyled>
      <div className="imgContainer">
        <img src={src} alt={alt} />
      </div>
      <div className="movieDetails">
        <p>{title}</p>
        <p>{duration}</p>
        <p>{voteAverage}</p>
        <p>{popularity}</p>
      </div>
    </CardContainerStyled>
  );
};

export default CardContainer;
