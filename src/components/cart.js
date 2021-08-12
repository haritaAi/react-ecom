import React,{Component} from 'react';
import formatCurrency from '../util';
class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            adress : "",
            showCheckOut : false
        };

    }
  handleInput = (e) => {
      this.setState({[e.target.name] : e.target.value})
  }
  createOrder = (e) => {
      e.preventDefault();
      const order = {
          name : this.state.name,
          email : this.state.email,
          address: this.state.address,
          cartItems : this.props.cartItems

      };
      this.props.createOrder(order);
  }


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
                            {(cartItems.length>0) && <div  onClick = {() => {this.setState({showCheckOut : true})}}
                                                           className = "button-primary">Proceed</div>}
                        </div>
                    </div>
                 
                </div>  
                {this.state.showCheckOut && (
                          <div >
                              <form onSubmit = {this.createOrder}>
                                 <ul className = "form-control">
                                     <li>
                                         <label htmlFor="">email : </label>
                                         <input type ="emai" required   name = "email" onChange = {this.handleInput}/>
                                     </li>
                                     <li>
                                         <label htmlFor="">Name </label>
                                         <input type ="text" required   name = "name" onChange = {this.handleInput}/>
                                     </li>
                                     <li>
                                         <label htmlFor="">Address </label>
                                         <input type ="text" required name = "address" onChange = {this.handleInput}/>
                                     </li>
                                     <li>
                                         <button className = "button-primary" type = "submit">Checkout</button>
                                     </li>
                                 </ul>
                              </form>
                          </div>   
                    )}      
            </div>
         );
    }
}
 
export default Cart;