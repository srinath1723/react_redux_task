import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../slices/productSlice';
import CardData1 from './carddata1';

const B = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/product.js')
            .then((response) => response.json())
            .then((data) => dispatch(setProducts(data)))
            .catch((error) => console.error('Error fetching products:', error));
    }, [dispatch]);

    return (
        <div>
            <CardData1 />
        </div>
    );
};

export default B;
