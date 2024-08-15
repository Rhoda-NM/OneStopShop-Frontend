import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function Category({categoryName, onClick }) {
  return (
    <div className="category browse_area" onClick={onClick}>
      <p>{categoryName}</p>
    </div>
  );
}

const fetchCategories = async () => {
  try {
    const res = await fetch("/api/products/categories");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Error fetching categories:', err);
    return [];
  }
};

function CategoryList() {
  const [currentCategoryPage, setCurrentCategoryPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentCategories, setCurrentCategories] = useState([]);

  const itemsPerPage = 6

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    const indexOfLastProduct = currentCategoryPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    setCurrentCategories(categories.slice(indexOfFirstProduct, indexOfLastProduct));
  }, [categories, currentCategoryPage]); // Recalculate when categories or page changes

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentCategoryPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentCategoryPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleCategoryClick = (categoryName) => {
    fetchProductsByCategory(categoryName).then((data) => {
      setProducts(data);
      console.log('Products fetched');
      setIsModalOpen(true);
    });
  };
  const fetchProductsByCategory = async (categoryName) => {
    try {
      const res = await fetch(`/api/products/category/${categoryName}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      console.error('Error fetching products by category:', err);
      return [];
    }
  };

  return (
    <>
    <div className="lower">
        <div className="title">
          <h2>Browse By Category</h2>
        </div>
        <div className="navigation">
          <i className="bi bi-arrow-left-circle"onClick={goToPreviousPage} disabled={currentCategoryPage === 1} ></i>
          <i className="bi bi-arrow-right-circle" onClick={goToNextPage} disabled={currentCategoryPage === totalPages}></i>
        </div>
      </div>
      <div className="categories"> 
      <div className="category-container">
      {currentCategories.map((category, index) => (
        <Category
          key={index}
          categoryName={category.name} // Use the correct property name
          onClick={() => handleCategoryClick(category.name)}
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        products={products}
      />
      </div>
      </div>
    </>
  );
}

export default CategoryList;
