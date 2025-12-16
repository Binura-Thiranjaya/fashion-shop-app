import React, { useState } from 'react';
import API from '../api';

function RatingFilter() {
    const [season, setSeason] = useState('');
    const [minRating, setMinRating] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await API.get(`/products/rating-condition?season=${season}&minRating=${minRating}`);
            setProducts(res.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching products');
        }
    };

    return (
        <div>
            <h2>Filter by Customer Rating</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={season} onChange={e => setSeason(e.target.value)} placeholder="Season" required />
                <input type="number" step="0.1" value={minRating} onChange={e => setMinRating(e.target.value)} placeholder="Minimum Rating" required />
                <button type="submit">Search</button>
            </form>
            {products.length > 0 && (
                <ul>
                    {products.map(p => (
                        <li key={p._id}>{p.productName} - Rating: {p.customerRating}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RatingFilter;
