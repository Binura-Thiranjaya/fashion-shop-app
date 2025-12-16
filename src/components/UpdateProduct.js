import React, { useState } from 'react';
import API from '../api';

function UpdateProduct() {
    const [productName, setProductName] = useState('');
    const [updateData, setUpdateData] = useState({});

    const handleChange = e => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await API.post('/products/update', { productName, ...updateData });
            alert('Product updated!');
            console.log(res.data);
        } catch (err) {
            console.error(err);
            alert('Error updating product');
        }
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name: </label>
                    <input
                        type="text"
                        value={productName}
                        onChange={e => setProductName(e.target.value)}
                        required
                    />
                </div>
                {['productCategory','unitsSold','returns','revenue','customerRating','stockLevel','season','trendScore'].map(field => (
                    <div key={field}>
                        <label>{field}: </label>
                        <input type="text" name={field} onChange={handleChange}/>
                    </div>
                ))}
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default UpdateProduct;
