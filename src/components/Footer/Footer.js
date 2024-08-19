import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterSection";
//import SocialLinks from "./SocialLinks";
//import SubscribeForm from "./SubscribeForm";
import FooterDetail from "./FooterDetail";

const Footer = () => {
  const supportLinks = [
    { text: "5th Avenue Broadway street NY", href: "#" },
    { text: "nonstop@gmail.com", href: "mailto:nonstop@gmail.com" },
    { text: "+254-733-435-531", href: "tel:+254733435531" },
  ];

  const accountLinks = [
    { text: "My Account", href: "#" },
    { text: "Login / Register", href: "#" },
    { text: "Cart", href: "#" },
    { text: "Wishlist", href: "#" },
    { text: "Shop", href: "#" },
  ];
  const quickLinks = [
    {text: "Facebook", href: "#"},
    {text: "Instagram", href: "#"},
    {text: "X", href: "#"},
    {text: "Tiktok", href: "#"}
  ]

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterDetail />
        <FooterSection title="Support" links={supportLinks} />
        <FooterSection title="Account" links={accountLinks} />
        <FooterSection title="Quick Link" links={quickLinks} />
      </FooterContent>
      <FooterDivider />
      <FooterBottom>
        <CopyrightText>
          Copyright nonstop@2024 All rights reserved
        </CopyrightText>
      </FooterBottom>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--Button, #000);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 80px 30px 25px 0;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const FooterContent = styled.div`
  align-self: center;
  justify-content: center;
  display: flex;
  margin-left: 85px;
  align-items: start;
  gap: 40px 87px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FooterDivider = styled.hr`
  opacity: 0.4;
  background-color: #fff;
  height: 1px;
  border: none;
  margin: 60px 0 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--Primary, #fff);
  font: 400 16px Poppins, sans-serif;
`;

const CopyrightText = styled.p`
  margin: 0;
`;

export default Footer;
