import React, { useState } from 'react';
import API from '../api';

function AddProduct() {
    const [product, setProduct] = useState({
        productCategory: '',
        productName: '',
        unitsSold: '',
        returns: '',
        revenue: '',
        customerRating: '',
        stockLevel: '',
        season: '',
        trendScore: ''
    });

    const handleChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await API.post('/products/add', product);
            alert('Product added successfully!');
            console.log(res.data);
        } catch (err) {
            console.error(err);
            alert('Error adding product');
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(product).map(field => (
                    <div key={field}>
                        <label>{field}: </label>
                        <input
                            type="text"
                            name={field}
                            value={product[field]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
