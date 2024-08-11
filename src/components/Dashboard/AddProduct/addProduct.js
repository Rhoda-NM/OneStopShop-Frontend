import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Col = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
`;

const AddProduct = () => {
  return (
    <CardBox>
      <Title>Add Product</Title>

      <InputWrapper>
        <Label>Product Title*</Label>
        <Input type="text" placeholder="Product Name" />
      </InputWrapper>

      <InputWrapper>
        <Label>Description*</Label>
        <Textarea className="size-lg" placeholder="Write about product..."></Textarea>
      </InputWrapper>

      <Row>
        <Col>
          <InputWrapper>
            <Label>SKU*</Label>
            <Input type="text" placeholder="Product SKU" />
          </InputWrapper>
        </Col>

        <Col>
          <InputWrapper>
            <Label>Category*</Label>
            <Input type="text" placeholder="Product category" />
          </InputWrapper>
        </Col>

        <Col>
          <InputWrapper>
            <Label>Tags*</Label>
            <Input type="text" placeholder="Product tags" />
          </InputWrapper>
        </Col>

        <Col>
          <InputWrapper>
            <Label>Product Quantity</Label>
            <Input type="text" placeholder="Product quantity" />
          </InputWrapper>
        </Col>

        <Col>
          <InputWrapper>
            <Label>Price*</Label>
            <Input type="text" placeholder="Price" />
          </InputWrapper>
        </Col>
      </Row>

      {/* Image Thumbnail */}
      <InputWrapper>
        <Label>Thumbnail Image*</Label>
        <Input type="file" accept="image/*" />
      </InputWrapper>

      {/* Additional Images */}
      <InputWrapper>
        <Label>Additional Images</Label>
        <Input type="file" accept="image/*" multiple />
      </InputWrapper>
    </CardBox>
  );
};

export default AddProduct;

