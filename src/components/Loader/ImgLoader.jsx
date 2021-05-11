import Spinner from "react-bootstrap/Spinner";

const ImgLoader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default ImgLoader;
