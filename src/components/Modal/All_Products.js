import React,{useState} from "react";
import './Modal.css'
import Card from '../Card/Card';
import Modal from "./Modal";

function AllProducts(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const handleButtonClick = () => {
        // Fetch all products
        fetchAllProducts().then((data) => {
          setProducts(data);
          setIsModalOpen(true);
        });
      };
    
      const fetchAllProducts = async () => {
        try {
          const res = await fetch(`/api/products`);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return await res.json();
        } catch (err) {
          console.error('Error fetching all products:', err);
          return [];
        }
      };
      return (
        <>
        <button className="All_products home" type="button" onClick={handleButtonClick}>View All Products</button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            products={products}
          />
        </>
    );
}
    
export default AllProducts;


