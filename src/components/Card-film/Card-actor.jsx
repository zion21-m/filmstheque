import styled from "styled-components";
const CardStyled = styled.div`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  background-color: #e5e5e5;
  margin: 0.5rem 0.5rem;
  .img-container {
    max-width: 150px;
    border-radius: 8px;
  }
  .actorImg {
    width: 100%;
    border-radius: 8px;
  }
`;
const ActorName = styled.div`
  color: #ffa004;
`;
const Character = styled.span`
  font-weight: bold;
`;

const CardActor = ({ src, alt, name, character }) => {
  return (
    <CardStyled>
      <div className="img-container">
        <img src={src} alt={alt} className="actorImg" />
      </div>
      <ActorName>{name}</ActorName>
      <div>
        Personnage: <Character>{character}</Character>
      </div>
    </CardStyled>
  );
};

export default CardActor;
