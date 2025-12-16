import React, { useState } from 'react';
import API from '../api';

function TopUnitsSold() {
    const [season, setSeason] = useState('');
    const [threshold, setThreshold] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await API.get(`/products/top-units-sold?unitsSoldThreshold=${threshold}&season=${season}`);
            setProducts(res.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching products');
        }
    };

    return (
        <div>
            <h2>Top Units Sold</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={season} onChange={e => setSeason(e.target.value)} placeholder="Season" required />
                <input type="number" value={threshold} onChange={e => setThreshold(e.target.value)} placeholder="Units Sold Threshold" required />
                <button type="submit">Search</button>
            </form>
            {products.length > 0 && (
                <ul>
                    {products.map(p => (
                        <li key={p._id}>{p.productName} - Units Sold: {p.unitsSold}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TopUnitsSold;
