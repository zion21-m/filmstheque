import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-left: 2rem;
  outline: none;
  font-size: 0.8rem;
`;
const StyledSearch = styled.span`
  border: 1px solid #0564ff;
  background-color: #0564ff;
  padding: 0.7rem;
  padding-top: 0.85rem;
  color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const InputField = styled.div`
  .searchLink,
  .searchLink:active,
  .searchLink:focus,
  .searchLink:visited {
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
  }
`;

const Input = ({ placeholder, type, className, onChange, onClick }) => {
  return (
    <InputField>
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
    </InputField>
  );
};

export default Input;
