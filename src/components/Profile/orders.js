import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthProvider';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
`;

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const user = useAuth();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
        axios.get('/api/wishlist', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => console.log(response.data))
        .catch(error => console.error('Error:', error));
        };

    fetchOrders();
  }, []);

  return (
    <div className="dashboard-body">
      <h2>My Orders</h2>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>OrderID</TableHeader>
            <TableHeader>Total Price</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Items</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>${order.total_price.toFixed(2)}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
              <TableCell>{order.order_items.length}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default MyOrders;
