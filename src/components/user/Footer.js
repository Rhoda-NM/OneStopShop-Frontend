import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8b3964a594d0bf681ac03e8b29d3b19df8e651a4dec5aff881596840465db90?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
          alt="Company logo"
        />
        <FooterColumns>
          <SubscribeColumn>
            <ColumnTitle>Subscribe</ColumnTitle>
            <SubscribeText>Get 10% off your first order</SubscribeText>
            <SubscribeForm>
              <SubscribeInput type="email" placeholder="Enter your email" />
              <SubscribeButton type="submit">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bac8a3a4556d00df359345f40c4304fa01a92d9d278e1cc8be218cdcd6e20d8?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
                  alt="Submit"
                />
              </SubscribeButton>
            </SubscribeForm>
          </SubscribeColumn>
          <SupportColumn>
            <ColumnTitle>Support</ColumnTitle>
            <ContactInfo>
              <p>5th Avenue Broadway street NY</p>
              <p>nonstop@gmail.com</p>
              <p>+254-733-435-531</p>
            </ContactInfo>
          </SupportColumn>
          <AccountColumn>
            <ColumnTitle>Account</ColumnTitle>
            <FooterLink href="/account">My Account</FooterLink>
            <FooterLink href="/login">Login / Register</FooterLink>
            <FooterLink href="/cart">Cart</FooterLink>
            <FooterLink href="/wishlist">Wishlist</FooterLink>
            <FooterLink href="/shop">Shop</FooterLink>
          </AccountColumn>
          <QuickLinkColumn>
            <ColumnTitle>Quick Link</ColumnTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/products">Our Products</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </QuickLinkColumn>
        </FooterColumns>
        <PaymentMethods>
          <ColumnTitle>Payment Methods</ColumnTitle>
          <PaymentIcons>
            <PaymentIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/828fef6076a9340ad48fbb61acff47dffc6648662d11b0419a4a7d1948fd9701?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
              alt="Payment method 1"
            />
            <PaymentIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/85b29af4432e6e9cdfddc41596d977c6897efac756680565e895ec6bbba18565?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
              alt="Payment method 2"
            />
            <PaymentIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3f931b5bb46bd78352bd88a0131d5a7239a1e768a4cb1564c39797501a7c090?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
              alt="Payment method 3"
            />
            <PaymentIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/239dd27d80acc049a9cce95e6e5361e78f6ee1e7de7c9b0ceb5375368d1bfb9c?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
              alt="Payment method 4"
            />
          </PaymentIcons>
        </PaymentMethods>
      </FooterContent>
      <FooterBottom>
        <Copyright>
          <CopyrightIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eace661d49743b45cf42c65d92ed3d3a0d595f65df4e3b13cda200f1611f05dc?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
            alt="Copyright"
          />
          <CopyrightText>
            Copyright nonstop@2024 All rights reserved
          </CopyrightText>
        </Copyright>
      </FooterBottom>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: var(--Button, #000);
  color: var(--Text, #fafafa);
  padding: 52px 0 20px;
  margin-top: 144px;
  font-family: Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterContent = styled.div`
  max-width: 1409px;
  margin: 0 auto;
  padding: 0 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 48px;
`;
const FooterColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 87px;
  @media (max-width: 991px) {
    gap: 40px;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 24px;
`;

const SubscribeColumn = styled.div`
  max-width: 217px;
`;

const SubscribeText = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

const SubscribeInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  color: #000;
`;

const SubscribeButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 12px;
  cursor: pointer;
`;

const SupportColumn = styled.div`
  max-width: 175px;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const AccountColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuickLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  color: var(--Text, #fafafa);
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const PaymentMethods = styled.div`
  margin-top: 40px;
`;

const PaymentIcons = styled.div`
  display: flex;
  gap: 8px;
`;

const PaymentIcon = styled.img`
  width: 42px;
  height: 28px;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #fff;
  margin-top: 60px;
  padding-top: 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 16px;
`;

const CopyrightIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CopyrightText = styled.p`
  margin: 0;
`;

export default Footer;
