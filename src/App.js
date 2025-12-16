import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';
import SeasonSummary from './components/SeasonSummary';
import TopUnitsSold from './components/TopUnitsSold';
import RatingFilter from './components/RatingFilter';
import ViewAllProducts from './components/ViewAllProducts';
import ViewProductByName from './components/ViewProductByName';

function App() {
  return (
    <Router>
      <div>
        <h1>Fashion Shop Dashboard</h1>
        <nav>
          <Link to="/add">Add Product</Link> | 
          <Link to="/update">Update Product</Link> | 
          <Link to="/delete">Delete Product</Link> | 
          <Link to="/summary">Season Summary</Link> | 
          <Link to="/top-units">Top Units Sold</Link> | 
          <Link to="/rating-filter">Rating Filter</Link> | 
          <Link to="/view-all">View All Products</Link> |
          <Link to="/view-product">View Product</Link>


        </nav>
        <hr />
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/summary" element={<SeasonSummary />} />
          <Route path="/top-units" element={<TopUnitsSold />} />
          <Route path="/rating-filter" element={<RatingFilter />} />
          <Route path="/view-all" element={<ViewAllProducts />} />
          <Route path="/view-product" element={<ViewProductByName />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
