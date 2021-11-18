import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { img, name, price, stock, seller } = props.product;
    
    return (
        
        <div className="product">
            <div className='image-container'>
                <img src={img} alt="" />
           </div>
            <div>
                <h4>{name}</h4>
             
                <p><small>by: {seller}</small></p>
                
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                
                <button className="button" onClick={()=>props.handleAddProduct(props.product)} > <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>

           </div>
        </div>
    );
};

export default Product;