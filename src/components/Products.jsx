import React, { useEffect,useState } from 'react';
import Product from './Produit';
import 'bootstrap/dist/css/bootstrap.min.css';


const Products =()=>{
   const [prod ,setProd] = useState([]);
   const [search, setSearch] = useState('');
   const [filteredItems, setFilteredItems] = useState([]);

   useEffect(()=>{
      try{
         fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProd(data));
      }catch(error){
         console.error('Error fetching products:', error);
      }
   },[]);

   const displayProduct = (product) => {
      return product.length > 0 ? (
         product.map((product) => (
           <Product prod={product} key={product.id} />
         ))
         ) : (
         <tr><td colSpan={7}>No Items</td></tr>);
   };

   const displayS = ()=>{
      const items = prod.filter((product)=>
      product.title.toLowerCase().includes(search.toLowerCase())
      );
      return items.length > 0 ?
      setFilteredItems(items)
      :
      (<tr><td colSpan={7}>Nothing Found</td></tr>)
   }
   const handleFormSubmit = (e) => {
      e.preventDefault();
      displayS();
    };

   return (
   <div>
      <div>
         <h3>Liste des produits:</h3>
         <form onSubmit={handleFormSubmit}>
            <input 
               type='text'
               className="form-control"
               value={search}
               onChange={(e)=>setSearch(e.target.value)}
               placeholder='search product...'  
               id='searchInput' 
            />
            <input
               type='submit'
               className="form-control bg-success"
               style={{marginTop:'6px'}}
               value='Search'
            /><br/>
         </form><hr/>
      </div>
      <table className='table'>
         <thead className='thead bg-dark'>
            <tr>
               <th>ID</th>
               <th>Title</th>
               <th>Price</th>
               <th>Description</th>
               <th>Category</th>
               <th>Image</th>
               <th>Rating</th>
            </tr>
         </thead>
         <tbody>
           {displayProduct(filteredItems)}
         </tbody>
      </table>
   </div>
   )
}
export default Products;