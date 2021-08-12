import React,{Component} from 'react';
import formatCurrency from '../util';
class Cart extends Component {
    
    render() { 
        const {cartItems} = this.props;
        return ( 
            <div>
                {cartItems.length === 0? 
                          <div className = "cart cart-header">Cart is empty</div>
                        :<div className = "cart cart-header">{cartItems.length} items in your cart </div>
                         }

                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => <li key = {item._id}>
                                 <div>
                                      <img src={item.image} alt={item.title} />
                                 </div>
                                 <div>{item.title}</div>
                                 <div className="right">
                                     <div>   {formatCurrency(item.price)} x {item.count}{" "}</div>
                                    <button onClick = {() => this.props.removeFromCart(item)}>Remove</button>
                                 </div>
                            </li>)}
                        </ul>
                    </div>

                    <div className="cart">
                        <div className="total">
                            <div>
                                Total : {"   "}
                                {formatCurrency(cartItems.reduce((a,c) => 
                                                    a + c.price*c.count, 0))}
                            </div>
                            {(cartItems.length>0) && <div className = "button-primary">Proceed</div>}
                        </div>
                    </div>
                </div>        
            </div>
         );
    }
}
 
export default Cart;