import styled from "styled-components";
const CardStyled = styled.div`
  padding: 1rem;
  border-radius: 8px;
  .img-container {
    max-width: 150px;
    border-radius: 8px;
  }
  .actorImg {
    width: 100%;
    border-radius: 8px;
  }
`;
const CardActor = ({ src, alt, name, character }) => {
  return (
    <CardStyled>
      <div className="img-container">
        <img src={src} alt={alt} className="actorImg" />
      </div>
      <div>Nom: {name}</div>
      <div>Personnage: {character}</div>
    </CardStyled>
  );
};

export default CardActor;
