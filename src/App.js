import React,{Component} from 'react';
import Cart from './components/cart';
import Filter from './components/filter';
import Products from './components/products';
import data from './data.json';

class App extends Component {

     


  
   
   constructor(){
     super();
     this.state = {
       products:data.products,
       cartItems:[],
       size : "",
       sort:""

     };
   }

   removeFromCart = (product) => {
      const cartItems = this.state.cartItems;
     this.setState({cartItems: cartItems.filter(item => item._id !== product._id)});

   }

   addToCart = (product) => {
    
     const cartItems = this.state.cartItems;
     let alreadyInCart = false;
     cartItems.forEach(item => {
       if(item._id === product._id){ 
           item.count++;
           alreadyInCart = true;
          }        
        })
        if(!alreadyInCart){
          cartItems.push({...product, count :1})
         
        } 
        this.setState({cartItems});
   }
 
    filterProducts = (event) => {
      //filter products
      if(event.target.value === "")
            this.setState({
              size:event.target.value,
              products: data.products
            });

      else{this.setState({
          size : event.target.value,
          products: data.products.filter(product =>
            product.sizes.includes(event.target.value) )
        });
       }
    }

    sortProducts = (event) => {
   const sort = event.target.value;
      // sort products
         this.setState(state => ({
           sort : sort,
           products : this.state.products.slice().sort((a,b) => 
             sort === "lowest"
             ? a.price > b.price 
                ?1 
                :-1
             :sort === "highest"
             ?a.price < b.price 
                ?1 
                :-1
             :a._id < b._id
                ? 1
                 :-1
           )
         }))

    }

  render() { 
    return ( 
      <div className="grid-container">
      <header >
        <a href="/" >React Shopping Cart</a>
      </header>
      <main>
         <div className="content">
           <div className="main-content">
            <Filter count = {this.state.products.length}
              size = {this.state.size}
              sort = {this.state.sort}
              filterProducts = {this.filterProducts}
              sortProducts = {this.sortProducts}
              >
              </Filter > 
               <Products products = {this.state.products}
                         addToCart = {this.addToCart}
                         ></Products>
           </div>
           <div className="side-content">
               <Cart cartItems = {this.state.cartItems}
                     removeFromCart = {this.removeFromCart}/>
           </div>
         </div>
          </main>
      <footer>
        All right is reserved
      </footer>
    </div>
     );
  }
}
 
export default App;
