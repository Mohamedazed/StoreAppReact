import React from "react";
import Rating from "./Rating";

const Product=({prod})=>{
    return(
        <tr>
            <td>{prod.id}</td>
            <td>{prod.title}</td>
            <td>{prod.price}DH</td>
            <td>{prod.description.slice(0,100)}...</td>
            <td><span className="badge badge-pill bg-dark">{prod.category}</span></td>
            <td><img src={prod.image} alt={prod.title} style={{width:'250px',height:'250px'}}/></td>
            <td><Rating rate={prod.rating.rate} count={prod.rating.count} /></td>
        </tr>
    );
}
export default Product;