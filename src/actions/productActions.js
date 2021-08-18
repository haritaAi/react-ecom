import {API} from '../../backend';
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";



export const  fetchProducts = () => async (dispatch) => {

  const res =   await fetch(`${API}/api/products`);
  const data = await  res.json();
  dispatch({ type:FETCH_PRODUCTS, payload : data });



}
export const filterProducts = (products,size) =>(dispatch) => {
            
            dispatch({
              type : FILTER_PRODUCTS_BY_SIZE,
              payload : {
                  size : size,
                  items : size === "" ? products 
                                      : products.filter( x=> x.sizes.includes(size)),
              }
            })
}

export const sortProducts = (filteredProducts,sort) => (dispatch) => {
    const sortedProducts =  filteredProducts.slice();
    console.log("TO BE sorted products :",sortedProducts);
    if (sort === "latest"){
      sortedProducts.sort((a,b) => (a._id>b._id)? 1 : -1);

    }
    else{
      sortedProducts.sort((a,b) => (
        sort === "lowest" ?
        a.price > b.price ? 1 : -1
        :
        a.price > b.price ? -1 : 1
      ))
    }
    console.log("Now  sorted products :",sortedProducts);

    dispatch({
      type : ORDER_PRODUCTS_BY_PRICE,
      payload : {
          sort: sort,
          items : sortedProducts
      }
    })
}