import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Header from "../Header/Header";
import Footer from "./Footer";


const LoginPage = () => {
  return (
    <PageWrapper>
      <MainContent>
        <Header />
        <LoginSection>
          <ImageColumn>
            <LoginImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58f8d2cac28805ceb18ea82740a6bbc168171a1b865552cbf5f91dc0eea8ce4c?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
              alt="Sign up illustration"
            />
          </ImageColumn>
          <FormColumn>
            <LoginForm />
          </FormColumn>
        </LoginSection>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: var(--BG, #fff);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContent = styled.main`
  align-self: center;
  width: 100%;
  max-width: 1225px;
  margin-top: 18px;
  font-family: Poppins, sans-serif;
  color: var(--Text2, #000);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LoginSection = styled.section`
  display: flex;
  margin-top: 150px;
  width: 100%;
  max-width: 1305px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ImageColumn = styled.div`
  width: 68%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const LoginImage = styled.img`
  aspect-ratio: 1.0;
  object-fit: contain;
  width: 90%;
  border-radius: 0 4px 4px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FormColumn = styled.div`
  width: 32%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

export default LoginPage;