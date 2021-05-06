import styled from "styled-components";
const OverviewDiv = styled.div`
  /* position: absolute;
  bottom: 0;
  max-width: 1200px;
  transition: all 0.6s;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 0.2rem;
  overflow: hidden;
  opacity: 0;
  font-size: 1rem;
  width: 20vw;
  color: white; */
  /* white-space: nowrap; */
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
const CardContainerStyled = styled.div`
  position: relative;
  width: 20vw;
  background-color: #fff;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid black;
  box-shadow: 4px 4px 20px black;
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #008cba;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
    font-size: 0.8rem !important;
  }
  &:hover .overlay {
    height: 100%;
  }
  .imgContainer {
    width: 20vw;
  }
  .imgContainer img {
    width: 100%;
    display: block;
  }
  .movie-details {
    font-size: 1rem;
    text-align: center;
  }
  .movie-title {
    /* color: #ffa106; */
    /* color: #46494c; */
    color: #1985a1;
    /* color: #3a6ea5; */
    font-weight: bold;
    font-size: 1.2rem;
  }

  /* &:hover {
    ${OverviewDiv} {
      transform: translate(0, -20vh);
      opacity: 1;
    }
  } */
`;
const CardContainer = ({
  src,
  alt,
  title,
  duration,
  voteAverage,
  popularity,
  details,
}) => {
  return (
    <CardContainerStyled>
      <div className="imgContainer">
        <img src={src} alt={alt} />
      </div>
      <div className="movie-details">
        <p className="movie-title">{title}</p>
        <p>{duration}</p>
        <p>{voteAverage}</p>
        <p>{popularity}</p>
      </div>
      <div className="overlay">
        <OverviewDiv className="OverviewDiv">{details}</OverviewDiv>
      </div>
    </CardContainerStyled>
  );
};

export default CardContainer;
