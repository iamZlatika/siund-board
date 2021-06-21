import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    outline: none;
  }
`;

interface ButtonProps {
  onClick: () => void;
  name: string;
}
const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return <ButtonStyled onClick={onClick}>{name}</ButtonStyled>;
};

export default Button;
