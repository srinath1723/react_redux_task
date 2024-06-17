import React from 'react';
import { useSelector } from 'react-redux';
import Card from './card';
import NavBar from './Navbar';
import './card.css';

const CardData1 = () => {
    const { products, totalCardCount, totalAmount } = useSelector(state => state.products);

    return (
        <div className="parent-container">
            <NavBar 
                totalCardCount={totalCardCount} 
                totalAmount={totalAmount} 
            />
            {products.map((product) => (
                <Card 
                    key={product.id} 
                    product={product} 
                />
            ))}
        </div>
    );
};

export default CardData1;
