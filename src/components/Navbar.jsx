import React from 'react';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../slices/productSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const { totalCardCount, totalAmount } = useSelector(state => state.products);

    const handleRefreshPage = () => {
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="btn btn-primary" onClick={handleRefreshPage}>Reload All Cards</button>
                <div className="navbar-info">
                    <button className="btn btn-primary">Total Products: {totalCardCount}</button>
                    <button className="btn btn-primary">Total Amount: ${totalAmount.toFixed(2)}</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
