import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #db4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #c03535;
  }
`;

const Message = styled.p`
  margin-top: 20px;
  text-align: center;
  color: ${props => (props.error ? 'red' : 'green')};
`;

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [additionalImages, setAdditionalImages] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  const clearForm = () => {
    setProductName('');
    setDescription('');
    setSku('');
    setStock('');
    setPrice('');
    setCategory('');
    setImageUrl('');
    setAdditionalImages('');
    setTags('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagList = tags.split(',').map(tag => tag.trim());
    const additionalImagesList = additionalImages.split(',').map(image => image.trim());

    const productData = {
      name: productName,
      sku: sku,
      description: description,
      stock: stock,
      price: price,
      category: category,
      image_url: imageUrl,
      additional_images: additionalImagesList,
      tags: tagList,
    };

    try {
      const response = await axios.post('/api/products', productData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        setMessage('Product added successfully');
        alert('Product added successfully');
        clearForm();
      }
    } catch (error) {
      setMessage('Failed to add product');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add New Product</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Product Name</Label>
          <Input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>SKU</Label>
          <Input type="text" value={sku} onChange={(e) => setSku(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Price</Label>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Stock</Label>
          <Input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Category</Label>
          <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Image URL</Label>
          <Input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Additional Image URLs (comma-separated)</Label>
          <Input type="text" value={additionalImages} onChange={(e) => setAdditionalImages(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Tags (comma-separated)</Label>
          <Input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        </FormGroup>
        <Button type="submit">Add Product</Button>
      </form>
      {message && <Message error={message === 'Failed to add product'}>{message}</Message>}
    </FormContainer>
  );
};

export default AddProduct;
