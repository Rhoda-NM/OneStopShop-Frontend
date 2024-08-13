import React,{useState} from "react";
import Modal from "./Modal";
function Category({iconClass,categoryName,onClick}){
    return(
        <div className="category" onClick={onClick}>
            <i className={iconClass}></i>
            <p>{categoryName}</p>
        </div>
    )
}
const fetchCategories= async ()=>{
  try {
    const res = await fetch('/api/categories');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Error fetching categories:', err);
    return [];
  }
}

function CategoryList(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const categories = [
      { iconClass: 'fas fa-mobile-alt', categoryName: 'Phones',identifier:'smartphones'},
      { iconClass: 'fas fa-desktop', categoryName: 'Computers',identifier:'laptops' },
      { iconClass: 'fas fa-book', categoryName: 'Books',identifier:'mobile-accessories' },
      { iconClass: 'fas fa-camera', categoryName: 'Camera',identifier:'tablets' },
      { iconClass: 'fas fa-tshirt', categoryName: 'Clothes',identifier:'womens-dresses' },
    ];  
    const handleCategoryClick = (categoryName) => {
        // Fetch products related to the category
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
          {categories.map((category, index) => (
            <Category
              key={index}
              iconClass={category.iconClass}
              categoryName={category.categoryName}
              onClick={() => handleCategoryClick(category.identifier)}
            />
          ))}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            products={products}
          />
        </>
    );
}
    
export default CategoryList;

