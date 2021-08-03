import React from 'react';
import {Link} from "react-router-dom";

const Product = ({el}) => {
    return (
        <div className='product'>
            <Link to={`/cards/${el.name}`}>
                <img src={el.image} alt=""/>
                <h1>{el.name}</h1>
                <p>{el.description}</p>
            </Link>
        </div>
    );
};

export default Product;