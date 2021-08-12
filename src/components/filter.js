import React, { Component } from 'react';

class Filter extends Component {
    state = {  }
    render() { 
        return (  
           <div className = "filter"> 
            <div className = "filter-result">
              {this.props.count} Products
            </div>
             <div className="filter-sort">
                
                Order{" "}
                <select value = {this.props.sort} onChange = {this.props.sortProducts}>
                    <option value="">Latest</option>
                    <option value="lowest">Price low to high</option>
                    <option value="highest">Price high to low</option>
                    </select>   
             </div>
             <div className="filter-size">
                 Filter{" "}
                 <select value = {this.props.size} onChange = { this.props.filterProducts}>
                     <option value="">ALL</option>
                     <option value="XS">XS</option>
                     <option value="S">S</option>
                     <option value="M">M</option>
                     <option value="L">L</option>
                     <option value="XL">XL</option>


                 </select>
                 </div>  
             </div>    
        );
    }
}
 
export default Filter;