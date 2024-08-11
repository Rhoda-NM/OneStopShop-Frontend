import React from 'react'
import { Link } from 'react-router-dom'

const ProductTableBody = () => {
    const list_data = [];
    return (
       <tbody className="border-0">
          {list_data.map((item) => (
             <tr key={item.id}>
                <td>
                   <div className="d-lg-flex align-items-center position-relative">
                      <img src={item.img} alt="" className="p-img" />
                      <div className="ps-lg-4 md-pt-10">
                         <Link href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">{item.title}</Link>
                         <div className="address">{item.address}</div>
                         <strong className="price color-dark">${item.price}</strong>
                      </div>
                   </div>
                </td>
                <td>{item.date}</td>
                <td>{item.view}</td>
                <td>
                   <div className={`property-status ${item.status_bg}`}>{item.status}</div>
                </td>
                <td>
                   <div className="action-dots float-end">
                      <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                         aria-expanded="false">
                         <span></span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                         <li><Link className="dropdown-item" href="#">View</Link></li>
                         <li><Link className="dropdown-item" href="#">Share</Link></li>
                         <li><Link className="dropdown-item" href="#"> Edit</Link></li>
                         <li><Link className="dropdown-item" href="#"> Delete</Link></li>
                      </ul>
                   </div>
                </td>
             </tr>
          ))}
       </tbody>
    )
 }
 
const MyProducts = () => {
  return (
    <div className="dashboard-body">
         <div className="position-relative">
            <h2 className="main-title d-block d-lg-none">My Products</h2>
            <div className="d-sm-flex align-items-center justify-content-between mb-25">
               <div className="fs-16">Showing <span className="color-dark fw-500">1–5</span> of <span
                  className="color-dark fw-500">40</span> results</div>
               
            </div>

            <div className="bg-white card-box p0 border-20">
               <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
                  <table className="table property-list-table">
                     <thead>
                        <tr>
                           <th scope="col">Name</th>
                           <th scope="col">SKU</th>
                           <th scope="col">Price</th>
                           <th scope="col">Stock</th>
                           <th scope="col">Action</th>
                        </tr>
                     </thead>
                     <ProductTableBody  />
                  </table>
               </div>
            </div>

            <ul className="pagination-one d-flex align-items-center justify-content-center style-none pt-40">
               <li className="me-3"><Link href="#">1</Link></li>
               <li className="selected"><Link href="#">2</Link></li>
               <li><Link href="#">3</Link></li>
               <li><Link href="#">4</Link></li>
               <li>....</li>
               <li className="ms-2"><Link href="#" className="d-flex align-items-center">
                  Last </Link></li>
            </ul>
         </div>
      </div>
  )
}

export default MyProducts