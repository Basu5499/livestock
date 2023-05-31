import React from 'react';
import '/home/basu/Downloads/Livestock/src/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Animal from './pages/Animal';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Read from './pages/Read';
import Update from './pages/Update';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
};

export default App;