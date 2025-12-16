import React, { useState } from 'react';
import API from '../api';

function SeasonSummary() {
    const [season, setSeason] = useState('');
    const [summary, setSummary] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await API.get(`/products/season-summary/${season}`);
            setSummary(res.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching season summary');
        }
    };

    return (
        <div>
            <h2>Season Summary</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={season} onChange={e => setSeason(e.target.value)} placeholder="Season" required />
                <button type="submit">Get Summary</button>
            </form>
            {summary && (
                <div>
                    <p>Total Units Sold: {summary.totalUnitsSold}</p>
                    <p>Total Returns: {summary.totalReturns}</p>
                    <p>Total Revenue: {summary.totalRevenue}</p>
                </div>
            )}
        </div>
    );
}

export default SeasonSummary;
