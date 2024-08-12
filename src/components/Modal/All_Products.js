import React,{useState} from "react";
import './Modal.css'
import Card from '../Card/Card';

function Modal({isOpen,onClose,products}){
    if(!isOpen) return null;

    console.log('Modal opened')
    return(
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Products</h2>
        <div className="product_list">
          {products.map((product, index) => (
            <Card key={index} productName={product.name} image_url={product.image_url} price={product.price} id={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
        <button className="All_products" type="button" onClick={handleButtonClick}>View All Products</button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            products={products}
          />
        </>
    );
}
    
export default AllProducts;

