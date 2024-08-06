import React from "react";
import styled from "styled-components";

const SignUpForm = () => {
  return (
    <FormWrapper>
      <FormHeader>
        <Title>Create an account</Title>
        <Subtitle>Enter your details below</Subtitle>
      </FormHeader>
      <Form>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="emailOrPhone">Email or Phone Number</Label>
          <Input type="text" id="emailOrPhone" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
        </InputGroup>
        <SubmitButton type="submit">Create Account</SubmitButton>
      </Form>
      <LoginPrompt>
        Already have account?
        <LoginLink href="/login">
          Log in
          <UnderlineImg
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d9492dbb15ec3d9830565989c6169321d41dcbee9c2f22f81738a14f88cd6c?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
            alt=""
          />
        </LoginLink>
      </LoginPrompt>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormHeader = styled.div`
  color: var(--Text2, #000);
`;

const Title = styled.h2`
  letter-spacing: 1.44px;
  font: 500 36px/1 Inter, sans-serif;
`;

const Subtitle = styled.p`
  margin-top: 24px;
  font: 400 16px Poppins, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  width: 100%;
  margin-bottom: 40px;
`;

const Label = styled.label`
  color: var(--Text2, #000);
  font: 400 16px Poppins, sans-serif;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 8px;
  font: 400 16px Poppins, sans-serif;
`;

const SubmitButton = styled.button`
  background-color: var(--Button2, #db4444);
  color: var(--Text, #fafafa);
  font: 500 16px Poppins, sans-serif;
  border: none;
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
`;

const LoginPrompt = styled.p`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
  color: var(--Text2, #000);
`;

const LoginLink = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnderlineImg = styled.img`
  width: 47px;
  margin-top: 4px;
`;

export default SignUpForm;
