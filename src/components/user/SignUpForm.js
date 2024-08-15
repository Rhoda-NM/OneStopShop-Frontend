import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";

const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .test('email', 'Invalid Email ', function(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return emailRegex.test(value);
      }),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  
  const SignUpForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
      validationSchema: validationSchema,
      onSubmit: async values => {
        console.log('Form data', values);
        try {
            const response = await axios.post('/user/register', {
              username: values.name,
              email: values.email,
              password: values.password,
            });
            //console.log('Form data', response.data);
            // Store the access token in local storage or a cookie
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            setShowModal(true); // Show modal on successful registration
        
            
        } catch (error) {
            console.error('Error registering user', error.response.data);
            setErrorMessage(error.response.data.error);
        }
        
      },
    });

    const handleClose = () => {
      setShowModal(false);
      navigate('/'); 
  };
  
    return (
      <>
     <FormWrapper>
        <FormHeader>
            <Title>Create an account</Title>
            <Subtitle>Enter your details below</Subtitle>
        </FormHeader>
        {errorMessage && <Error>{errorMessage}</Error>}
        <Form onSubmit={formik.handleSubmit}>
            <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}
            </InputGroup>
            <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            </InputGroup>
            <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            </InputGroup>
            <SubmitButton type="submit">Create Account</SubmitButton>
        </Form>
        <LoginPrompt>
            Already have an account?
            <LoginLink onClick={() => navigate('/user/login')}>
            Log in
            <UnderlineImg
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d9492dbb15ec3d9830565989c6169321d41dcbee9c2f22f81738a14f88cd6c?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
                alt=""
            />
            </LoginLink>
        </LoginPrompt>
    </FormWrapper>

    {showModal && (
        <ModalBackground>
            <ModalWrapper>
                <ModalHeader>
                    <ModalTitle>Welcome</ModalTitle>
                    <Button onClick={handleClose}>X</Button>
                </ModalHeader>
                <ModalBody>Account created successfully</ModalBody>
                <ModalFooter>
                    <Button onClick={handleClose}>Close</Button>
                </ModalFooter>
            </ModalWrapper>
        </ModalBackground>
      )}
    </>
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

const Error = styled.div`
  color: red;
  /* Add your styles here */
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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

// Modal Wrapper
const ModalWrapper = styled.div`
  background: white;
  border-radius: 5px;
  width: 500px;
  max-width: 90%;
  padding: 20px;
`;

// Modal Header
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
`;

// Modal Title
const ModalTitle = styled.h5`
  margin: 0;
`;

// Modal Body
const ModalBody = styled.div`
  padding: 20px 0;
`;

// Modal Footer
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid #dee2e6;
`;

// Button (you can customize this further)
const Button = styled.button`
  padding: 5px 15px;
  background-color: #db4445;
  color: #333;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

export default SignUpForm;
