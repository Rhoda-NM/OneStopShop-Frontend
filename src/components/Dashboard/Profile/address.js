import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  margin-top: 40px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Column = styled.div`
  padding: 0 15px;
  margin-bottom: 25px;
  width: 100%;

  @media (min-width: 992px) {
    width: ${({ size }) => (size ? `calc(${size} * 25%)` : '100%')};
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 25px;
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

const AddressAndLocation = () => {
  return (
    <Container>
      <Title>Address & Location</Title>
      <Row>
        <Column>
          <InputWrapper>
            <Label>Address*</Label>
            <Input type="text" placeholder="19 Yawkey Way" />
          </InputWrapper>
        </Column>
        <Column size={1}>
          <InputWrapper>
            <Label>Country*</Label>
            <Input type="text" placeholder="Afghanistan" />
          </InputWrapper>
        </Column>
        <Column size={1}>
          <InputWrapper>
            <Label>City*</Label>
            <Input type="text" placeholder="" />
          </InputWrapper>
        </Column>
        <Column size={1}>
          <InputWrapper>
            <Label>Zip Code*</Label>
            <Input type="number" placeholder="1708" />
          </InputWrapper>
        </Column>
        <Column size={1}>
          <InputWrapper>
            <Label>State*</Label>
          </InputWrapper>
        </Column>
      </Row>
    </Container>
  );
};

export default AddressAndLocation;

