import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/category/jewelery'
      );
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`App ${isHome && 'home'}`}>
      <Header isHome={isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
