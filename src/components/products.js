import React, { Component } from 'react';
import formatCurrency from '../util';

export default class Products extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <ul className="products">
                    {
                        this.props.products.map(product => (
                            <li key = {product._id}>
                                <div className="product">   
                                  <a href={"#"+ product._id}>
                                      <img src={product.image} alt = "product image"  />
                                      <p className = "product-title">
                                          {product.title}
                                      </p>
                                  </a>
                                  <div className="product-price">
                                     <div>{formatCurrency(product.price)}</div>
                                     <div className = "button-primary"  onClick = {() => {this.props.addToCart(product)}}>
                                         Add to Cart
                                     </div> 
                                  </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
         );
    }
}
 
