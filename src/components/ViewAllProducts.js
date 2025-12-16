import React, { useEffect, useState } from 'react';
import API from '../api';

function ViewAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await API.get('/products');
                setProducts(res.data);
            } catch (err) {
                console.error(err);
                alert('Error fetching products');
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>All Products</h2>
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>Product Category</th>
                            <th>Product Name</th>
                            <th>Units Sold</th>
                            <th>Returns</th>
                            <th>Revenue</th>
                            <th>Customer Rating</th>
                            <th>Stock Level</th>
                            <th>Season</th>
                            <th>Trend Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p._id}>
                                <td>{p.productCategory}</td>
                                <td>{p.productName}</td>
                                <td>{p.unitsSold}</td>
                                <td>{p.returns}</td>
                                <td>{p.revenue}</td>
                                <td>{p.customerRating}</td>
                                <td>{p.stockLevel}</td>
                                <td>{p.season}</td>
                                <td>{p.trendScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ViewAllProducts;
