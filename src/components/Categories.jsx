import React,{useState,useEffect} from 'react';
import Product from './Produit';

const Categories = () => {
    const [prod,setProd] = useState([]);
    const [cat,setCat] = useState([]);
    const [clicked,setClicked] = useState(null);
    
    useEffect(()=>{
        try{
            fetch('https://fakestoreapi.com/products')
                .then((res)=>res.json())
                .then((data)=>setProd(data));
        }catch(error){
            console.error('this is error my friend:',error);
        }},[])

    const displaydata = () =>{
        return prod.length > 0 ? (
        prod.map((pr)=>(
            <Product prod={pr} key={pr.id}/>
        ))):(
            <tr><td colSpan={7}>No Items Found</td></tr>
        );
    };

    const getCat=()=>{
        try{
            fetch('https://fakestoreapi.com/products/categories')
            .then((r)=>r.json())
            .then((data)=>setCat(data))
        }catch(error){
            console.error('Error my friend:',error);
        }
    };

    const displayCat=()=>{
        return cat.map((c,k)=>(
            <button key={k} 
                    className={`btn ${c === cat ? 'btn-warning' : 'btn-success'}`}
                    onClick={(e)=>{
                        e.preventDefault();
                        setClicked(c);
                    }}>
            {c}</button>
        ));
    };

    useEffect(()=>{
        getCat()
    },[]);

    return <div>
            <h3 className='text-center bg-light'>liste des categories :</h3>
            <hr/>
            <div className="row g-3 align-items-center">
                <span className="btn-group">{displayCat()}</span>
            </div>
            <hr/>
            <table className='table table-hover'>
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Image</th>
                    <th scope="col">Rating</th>
                </tr>
                </thead>
                <tbody>
                    <th scope="row"></th>
                    {   clicked ? 
                        prod.filter((p)=> p.category === clicked)
                            .map((pr)=> <Product prod={pr} key={pr.id}/>)
                        : displaydata()
                    }
                </tbody>
            </table>
        </div>
}
export default Categories;