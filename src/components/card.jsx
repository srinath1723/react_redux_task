import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTotalCardCount, updateTotalAmount, removeProduct, updateProductQuantity } from '../slices/productSlice';
import './card.css';

const Card = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(product.quantity || 1);

    useEffect(() => {
        // Update the product quantity in the Redux store
        dispatch(updateProductQuantity({ id: product.id, quantity }));
    }, [quantity, dispatch, product.id]);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            dispatch(updateTotalCardCount(1));
            dispatch(updateTotalAmount(product.price));
            return newQuantity;
        });
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => {
                const newQuantity = prevQuantity - 1;
                dispatch(updateTotalCardCount(-1));
                dispatch(updateTotalAmount(-product.price));
                return newQuantity;
            });
        }
    };

    const getPriceWithQuantity = () => {
        return product.price * quantity;
    };

    return (
        <div className="container">
            <img src={product.images} alt={product.title} />
            <div className="col-md-7">
                <div className="card-body">
                    <div className="top">
                        <div className="top-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title">{product.title}</h5>
                            <h4 className="card-title">${product.price.toFixed(2)}</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className="card-text">Brand: {product.brand}</p>
                                <p className="card-text text-success">Discount Offer: {product.discountPercentage}%</p>
                            </div>
                            <button type="button" className="btn btn-danger" onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
                        </div>
                        <p className="card-text">Rating: {product.rating}/5</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text">{product.description}</p>
                            <div className="quantity-btn">
                                <button type="button" className="btn btn-outline-danger" onClick={decreaseQuantity}>-</button>
                                <div className="py-1 quantityText">&nbsp;&nbsp;{quantity}&nbsp;&nbsp;</div>
                                <button type="button" className="btn btn-outline-success" onClick={increaseQuantity}>+</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>SUBTotal: </h5>
                        <h5>${getPriceWithQuantity().toFixed(2)}</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>Shipping: </h5>
                        <h5>FREE</h5>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>Total: </h5>
                        <h5>${getPriceWithQuantity().toFixed(2)}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
