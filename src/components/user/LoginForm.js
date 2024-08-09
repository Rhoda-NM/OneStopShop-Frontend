import React from "react";
import { useFormik } from 'formik';
import { useAuth } from "../../AuthProvider";
import * as Yup from 'yup';
import styled from "styled-components";
import Button from "./login/Button";


const validationSchema = Yup.object({
  email: Yup.string()
  .email('Invalid email address')
  .required('Email is required'),
password: Yup.string()
  .required('Password is required'),
});

const LoginForm = () => {
const { login } = useAuth();
const formik = useFormik({
initialValues: {
  email: '',
  password: '',
},
validationSchema: validationSchema,
onSubmit: async values => {
  console.log('Form data', values);
  // handle form submission
  try {
    await login(values.email, values.password);
  } catch (err) {
    console.error('Login error:', err);
    
  }
},
});

return (
  <FormContainer>
    <Header>
      <Title>Welcome Back!</Title>
    </Header>
    <Subtitle>Enter your details below</Subtitle>
    <form onSubmit={formik.handleSubmit}>
      <FormFields>
        <InputWrapper>
            <Label htmlFor="email">Email </Label>
            <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
            ) : null}
        </InputWrapper>
        <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input 
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </InputWrapper>
        
      </FormFields>
      <FormActions>
        <Button type="submit">Log In</Button>
        <ForgotPassword href="#">Forget Password?</ForgotPassword>
      </FormActions>
    </form>
    <SignupPrompt>
      Don't have an account?
      <SignupLink href="/signup">
         Sign Up
        <UnderlineImg
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d9492dbb15ec3d9830565989c6169321d41dcbee9c2f22f81738a14f88cd6c?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
          alt=""
        />
      </SignupLink>
    </SignupPrompt>
  </FormContainer>
);
};

const FormContainer = styled.div`
  display: flex;
  max-width: 527px;
  flex-direction: column;
  align-items: flex-start;
  margin: 24px 24px;
  padding: 16px 24px;
`;

const Header = styled.header`
  width: 100%;
`;

const Title = styled.h1`
  color: var(--Text2, #000);
  letter-spacing: 1.44px;
  font: 500 20px/1 Inter, sans-serif;
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
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Label = styled.label`
  color: var(--Text2, #000);
  padding: 0 16px;
  font: 400 16px Poppins, sans-serif;
`;

const Input = styled.input`
  margin-top: 8px;
  border: none;
  border-bottom: 1px solid #000;
  padding: 4px 0;
  font: 400 16px Poppins, sans-serif;
  &:focus {
    outline: none;
    border-bottom-color: var(--Secondary-2, #db4444);
  }
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
