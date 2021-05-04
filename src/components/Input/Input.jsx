import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-left: 2rem;
  outline: none;
`;
const Input = ({ placeholder, type, className }) => {
  return (
    <StyledInput placeholder={placeholder} type={type} className={className} />
  );
};

export default Input;
