import React from "react";
import styled from "styled-components";

function InputField({ label, type = "text" }) {
  return (
    <InputWrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} id={label} name={label} required />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
 
`;

const Label = styled.label`
  color: var(--Text2, #000);
  font:  16px Poppins, sans-serif;
  paddiing-right: 20px
`;

const Input = styled.input`
  margin-top: 8px;
  border: none;
  border-bottom: 1px solid #000;
  padding: 12px 10px;
  font: 400 16px Poppins, sans-serif;
  &:focus {
    outline: none;
    border-bottom-color: var(--Secondary-2, #db4444);
  }
`;

export default InputField;
