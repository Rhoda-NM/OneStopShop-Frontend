import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import products card
import Header from "../Header/Header";
import Footer from "../user/Footer";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
    });

    const fetchProducts = async () => {
        try {
          const response = await axios.get('/api/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      };
};

export default Products;