import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgLoader from "../Loader/ImgLoader";

const MoreInformations = styled.div`
  background-color: #1985a1;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  height: 100%;
`;
const CardContainerStyled = styled.div`
  position: relative;
  width: 20vw;
  background-color: #fff;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 4px 4px 20px black;
  .overlay {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  &:hover .imgContainer img {
    opacity: 0.3;
  }
  &:hover .overlay {
    opacity: 1;
  }
  .imgContainer {
    width: 20vw;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .imgContainer img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .movie-details {
    font-size: 1rem;
    text-align: center;
  }
  .movie-title {
    color: #1985a1;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .linkToMovieDetails {
    text-decoration: none;
    /* color: #fff; */
  }
  .voteAverage {
    color: green;
  }
  ${MoreInformations}:hover {
    background-color: #e5e5e5;
    border: 1px solid #1985a1;
    color: #1985a1;
  }
`;
const CardContainer = ({
  src,
  alt,
  genre,
  title,
  duration,
  voteAverage,
  popularity,
  id,
  type,
}) => {
  return (
    <CardContainerStyled>
      <div className="imgContainer">
        {src ? <img src={src} alt={alt} /> : <ImgLoader />}
      </div>
      <div className="movie-details">
        <p className="movie-title">{title}</p>
        <p>{duration}</p>
        <p className="voteAverage">{voteAverage}</p>
        <p>{popularity}</p>
        <div>{genre}</div>
      </div>
      <div className="overlay">
        <Link to={`/${type}/${id}`} className="linkToMovieDetails">
          <MoreInformations>Voir plus de details</MoreInformations>
        </Link>
      </div>
    </CardContainerStyled>
  );
};

export default CardContainer;
