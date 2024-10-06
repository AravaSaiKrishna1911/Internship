
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Stocks from './components/Stocks';
import RealEstate from './components/RealEstate';
import MutualFunds from './components/MutualFunds';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/stocks" element={<Stocks />} />
                    <Route path="/realEstate" element={<RealEstate />} />
                    <Route path="/mutualFunds" element={<MutualFunds />} />
                    <Route path="/logout" element={<div>Logout</div>} />
                </Routes>
                <Footer /> {/* Include the Footer here */}
            </div>
        </Router>
    );
}

export default App;
