import React,{useState} from "react";
import './Modal.css'
import Card from '../Card/Card';
function Category({iconClass,categoryName,onClick}){
    return(
        <div className="category" onClick={onClick}>
            <i className={iconClass}></i>
            <p>{categoryName}</p>
        </div>
    )
}

const productsLister=(productsList)=>{
  return productsList.map((product,index)=>{
    return (<Card key={index} productName={product.name} image_url={product.image_url} price={product.price} id={product.id} />
  )})
}
function Modal({isOpen,onClose,products}){
    if(!isOpen) return null;
    //console.log('Modal opened')
    //console.log(products)
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

function CategoryList(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const categories = [
      { iconClass: 'fas fa-laptop-alt', categoryName: 'laptops' },
      { iconClass: 'fas fa-desktop', categoryName: 'furniture' },
      { iconClass: 'fas fa-book', categoryName: 'beauty' },
      { iconClass: 'fas fa-camera', categoryName: 'mens-watches' },
      { iconClass: 'fas fa-tshirt', categoryName: 'sunglasses' },
    ];  
    const handleCategoryClick = (categoryName) => {
        // Fetch products related to the category
        fetchProductsByCategory(categoryName).then((data) => {
          setProducts(data);
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
              onClick={() => handleCategoryClick(category.categoryName)}
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

