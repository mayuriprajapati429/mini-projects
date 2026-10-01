import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function DetailPage() {
    const [detail,setDetail] = useState();
    const[msg,setMsg] = useState("DELETE");
    const {id} = useParams();
      const navigate = useNavigate();
    console.log(id)
    const url = import.meta.env.VITE_API_URL+`/${id}`;
   useEffect(()=>{
     fetch(url,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res)=>res.json()).
    then((data)=>{
        console.log(data)
        setDetail(data)
    });
   },[])
   if(!detail){
            return (<div style={{"color":"black"}}>Loading</div>)
        }
  return (
    <>
    <div className='m-4'>
    <img style={{"width":"320px"}} src={detail.avatar}/>
    <h4>{detail.name}</h4>
    <p>Id: {detail.id}</p>
    <p>Name: {detail.name}</p>
    <p>Created At: {detail.createdAt}</p>
    
    <Link to='/productList'><button className='btn btn-secondary m-4'>Back</button></Link>
    <Link to={`/addDetails/${id}`}><button  className='btn btn-primary m-4'>Edit</button></Link>
    <Link to={`/addDetails/${id}`}><button  className='btn btn-danger m-4' onClick={(e)=>{
        e.preventDefault()
        setMsg(<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>)
        fetch(url,{
            method: "DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((res)=>{
            res.json()
        })
        .then((data)=>{
            console.log(data)
           navigate('/productList')
        })
        }
    }>{msg}</button></Link>
    </div>
    </>
  )
}

export default DetailPage