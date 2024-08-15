import React, { useState } from "react";
import '../Modal/Modal.css';
import Card from '../Card/Card.js';
import next from '../Modal/right.svg'
import previous from '../Modal/left.svg'

function SearchModal({ isOpen, onClose, products, itemsPerPage = 4,HeaderJsx }) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!isOpen) return null;
  if (products.length < 1){
    return(
        <div className="modal Area">
        <div className="modal_content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>No products found!</h2>
        </div>
        </div>
    
    )
  }

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="modal Area">
      <div className="modal_content">
        <span className="close" onClick={onClose}>&times;</span>
                {HeaderJsx}
        <div className="Product_container">
              <div className="previous_page">
              <img src={previous} className="page_button" onClick={goToPreviousPage} disabled={currentPage === 1}/>
              </div>
          <div className="product_list ">
          {currentProducts.map((product, index) => (
            <Card key={index} productName={product.name} image_url={product.image_url} price={product.price} id={product.id} />
          ))}
        </div>
              <div className="next_page">
              <img src={next}  className="page_button" onClick={goToNextPage} disabled={currentPage === totalPages}/>
              </div>
        </div>
        </div>
      </div>
  );
}

export default SearchModal;
