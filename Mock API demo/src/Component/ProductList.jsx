import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductList() {
    const url = import.meta.env.VITE_API_URL;
        console.log(url);
        const [product,setProduct] = useState();
        useEffect(()=>{
            fetch(url,{
                method : 'GET',
                headers: {
                    'Content-Type':'application/json'
                } 
            }).then((data)=>data.json())
            .then((res)=>{
               setProduct(res);
               console.log(res)
            });
        },[]);
        if(!product){
            return (<div style={{"color":"black"}}>Loading</div>)
        }
  return (
    <>
    <Link to='/addNew'><button className='btn btn-warning m-4'>Add Product</button></Link>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"48px","marginTop":"48px"}}>
  {
    product.map((temp)=>{
        return(
          <div class="card" style={{"width":"18vw"}}>
  <img src={temp.avatar} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{temp.name}</h5>
    <Link to={`/productList/${temp.id}`} class="btn btn-primary">View Details</Link>
  </div>
</div>
        )
    })
  }
  </div>
    </>
  )
}

export default ProductList