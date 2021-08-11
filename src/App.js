import React,{Component} from 'react';
import Products from './components/products';
import data from './data.json';

class App extends Component {

     


  state = {  };
   
   constructor(){
     super();
     this.state = {
       products:data.products,
       size : "",
       sort:""

     };
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
               <Products products = {this.state.products}></Products>
           </div>
           <div className="side-content">
               Cart Items
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
