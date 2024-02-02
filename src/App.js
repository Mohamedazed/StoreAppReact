import React, { useState } from 'react';
import Home from './components/Home';
import Categories from './components/Categories';
import Products from './components/Products';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => {
    setShowNavList(!showNavList);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div
        className='App'
        style={{
          backgroundImage: `url('/bgStore.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          flex: '1', 
        }}
      >
        <div className='container'>
          <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{ zIndex: 1 }}>
              <div className='container'>
                <Link to='/' className='navbar-brand'>
                  Home
                </Link>
                <button
                  className='navbar-toggler'
                  type='button'
                  onClick={toggleNavList}
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    showNavList ? 'show' : ''
                  }`}
                >
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link to='/cat' className='nav-link'>
                        Categories
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/products' className='nav-link'>
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to='/cards' className='nav-link'>
                        Cards
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <br />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cat' element={<Categories />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cards' element={<Cards />} />
            </Routes>
          </Router>
        </div>
      </div>

      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2024 Your App Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

