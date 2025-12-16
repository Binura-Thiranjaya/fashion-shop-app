import React, { useState } from 'react';
import API from '../api';

function DeleteProduct() {
    const [productName, setProductName] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await API.post('/products/delete', { productName });
            alert('Product deleted!');
        } catch (err) {
            console.error(err);
            alert('Error deleting product');
        }
    };

    return (
        <div>
            <h2>Delete Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name: </label>
                    <input type="text" value={productName} onChange={e => setProductName(e.target.value)} required />
                </div>
                <button type="submit">Delete Product</button>
            </form>
        </div>
    );
}

export default DeleteProduct;
