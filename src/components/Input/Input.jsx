import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-left: 2rem;
  outline: none;
`;
const StyledSearch = styled.span`
  border: 1px solid #ffa106;
  background-color: #ffa106;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  .searchLink,
  .searchLink:active,
  .searchLink:focus,
  .searchLink:visited {
    text-decoration: none;
    color: #fff;
  }
`;
const Input = ({ placeholder, type, className, onChange, onClick }) => {
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        type={type}
        className={className}
        onChange={onChange}
      />
      <StyledSearch className="search" onClick={onClick}>
        <Link to="/search" className="searchLink">
          Search
        </Link>
      </StyledSearch>
    </>
  );
};

export default Input;
