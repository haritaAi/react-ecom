import React,{Component} from 'react';
import Cart from './components/cart';
import Filter from './components/filter';
import Products from './components/products';
import store from './store';
import {Provider} from 'react-redux';


class App extends Component {

     


  
  render() { 
    return ( 
      <Provider store = {store}>
      <div className="grid-container">
      <header >
        <a href="/" >React Shopping Cart</a>
      </header>
      <main>
         <div className="content">
           <div className="main-content">
            <Filter/>
            <Products />
           </div>
           <div className="side-content">
               <Cart/>
           </div>
         </div>
          </main>
      <footer>
        All right is reserved
      </footer>
    </div>
    </Provider>
     );
  }
}
 
export default App;
