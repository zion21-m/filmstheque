import styled from "styled-components";
const StyledFooter = styled.div`
  background-color: #191919;
  padding: 2rem 0rem;
  color: white;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        Ce produit utilise l'API TMDb mais n'est ni approuvé ni certifié par
        TMDb.
      </div>
      <div>Copiright merdie mulaba Mai 2021</div>
    </StyledFooter>
  );
};

export default Footer;
