import { Button } from "react-bootstrap";
import { StyledStartingPage } from "./StartingPage.style";
import { Link } from "react-router-dom";

const StartingPage = () => {
  return (
    <StyledStartingPage>
      <div>Bienvenue sur notre site</div>
      <div className="white">
        Trouvez tous les films et series que vous cherchez, et si vous n'avez
        pas de préférence, nous vous proposons, les films tendances, et les
        mieux cotés en fonction de l'appréciation du public
      </div>
      <div>
        <Link to="/home">
          <Button>Allez à l'accueil</Button>
        </Link>
      </div>
    </StyledStartingPage>
  );
};

export default StartingPage;
