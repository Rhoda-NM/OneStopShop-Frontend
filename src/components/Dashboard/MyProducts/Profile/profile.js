import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  margin: 0 -15px;
  background: #fff;
`;

const Column = styled.div`
  padding: 0 15px;
  margin-bottom: 30px;
  width: 100%;

  @media (min-width: 576px) {
    width: ${({ size }) => (size ? `calc(${size} * 50%)` : '100%')};
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

const ProfileDetails = () => {
  return (
    <Row>
      <Column>
        <InputWrapper>
          <Label>Username*</Label>
          <Input type="text" placeholder="JonyRio" />
        </InputWrapper>
      </Column>
      <Column size={1}>
        <InputWrapper>
          <Label>First Name*</Label>
          <Input type="text" placeholder="Mr Johny" />
        </InputWrapper>
      </Column>
      <Column size={1}>
        <InputWrapper>
          <Label>Last Name*</Label>
          <Input type="text" placeholder="Riolek" />
        </InputWrapper>
      </Column>
      <Column size={1}>
        <InputWrapper>
          <Label>Email*</Label>
          <Input type="email" placeholder="companyinc@mail.com" />
        </InputWrapper>
      </Column>
      <Column size={1}>
        <InputWrapper>
          <Label>Phone Number*</Label>
          <Input type="tel" placeholder="+880 01723801729" />
        </InputWrapper>
      </Column>
    </Row>
  );
};

export default ProfileDetails;
