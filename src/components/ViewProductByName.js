import React, { useState } from 'react';
import API from '../api';

function ViewProductByName() {
    const [productName, setProductName] = useState('');
    const [product, setProduct] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await API.get(`/products/${productName}`);
            setProduct(res.data);
        } catch (err) {
            console.error(err);
            alert('Product not found');
            setProduct(null);
        }
    };

    return (
        <div>
            <h2>View Product Details</h2>
            <form onSubmit={handleSubmit}>
                <label>Product Name: </label>
                <input
                    type="text"
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>

            {product && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{product.productName}</h3>
                    <p><strong>Category:</strong> {product.productCategory}</p>
                    <p><strong>Units Sold:</strong> {product.unitsSold}</p>
                    <p><strong>Returns:</strong> {product.returns}</p>
                    <p><strong>Revenue:</strong> {product.revenue}</p>
                    <p><strong>Customer Rating:</strong> {product.customerRating}</p>
                    <p><strong>Stock Level:</strong> {product.stockLevel}</p>
                    <p><strong>Season:</strong> {product.season}</p>
                    <p><strong>Trend Score:</strong> {product.trendScore}</p>
                </div>
            )}
        </div>
    );
}

export default ViewProductByName;
