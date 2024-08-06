import React from "react";
import styled from "styled-components";
import InputField from "./login/InputForm";
import Button from "./login/Button";

function LoginForm() {
  return (
    <FormContainer>
      <Header>
        <Title>Welcome Back!</Title>
      </Header>
      <Subtitle>Enter your details below</Subtitle>
      <FormFields>
        <InputField label="Email" />
        <InputField label="Password" type="password" />
      </FormFields>
      <FormActions>
        <Button>Log In</Button>
        <ForgotPassword>Forget Password?</ForgotPassword>
      </FormActions>
      <SignupPrompt>
        Don't have an account?
        <SignupLink href="/login">
           Sign Up
          <UnderlineImg
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d9492dbb15ec3d9830565989c6169321d41dcbee9c2f22f81738a14f88cd6c?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
            alt=""
          />
        </SignupLink>
      </SignupPrompt>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  max-width: 527px;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.header`
  width: 100%;
`;

const Title = styled.h1`
  color: var(--Text2, #000);
  letter-spacing: 1.44px;
  font: 500 36px/1 Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Subtitle = styled.p`
  color: var(--Text2, #000);
  margin-top: 40px;
  font: 400 16px Poppins, sans-serif;
`;

const FormFields = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  max-width: 370px;
  flex-direction: column;
  gap: 40px;
`;

const FormActions = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 20px 87px;
  font: 16px Poppins, sans-serif;
`;

const ForgotPassword = styled.a`
  color: var(--Secondary-2, #db4444);
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
`;

const SignupPrompt = styled.p`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
  color: var(--Text2, #000);
`;

const SignupLink = styled.a`
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
export default LoginForm;
