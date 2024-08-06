import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  align-self: stretch;
  border-radius: 4px;
  background-color: var(--Button2, #db4444);
  color: var(--Text, #fafafa);
  font: 500 16px Poppins, sans-serif;
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c13b3b;
  }

  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;

export default Button;