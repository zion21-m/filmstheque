import Spinner from "react-bootstrap/Spinner";

const SpinnerLoader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default SpinnerLoader;
