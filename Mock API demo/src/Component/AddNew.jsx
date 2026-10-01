import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddNew() {
    const cardAdd = (e) => {
            e.preventDefault();
            fetch(url,{
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(newcard)
            })
            .then((res)=>res.json())
            .then((data)=>{
                navigate('/productList')
                console.log(data)
            })
          }
    const [newcard,setNewcard] = useState({
        id:'',
        name:'',
        createdAt:'',
        avatar:''
    });
    const url = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
  return (
    <>
    <form className="m-4">
        <div class="mb-3">
          <label>Add Id:</label>
          <input
            className="p-2 m-4"
            onChange={(e) => {
              {
                setNewcard({...newcard, id:e.target.value});
              }
            }}
          />
        </div>
        <div class="mb-3">
          <label>Add Name:</label>
          <input
            className="p-2 m-4"
           onChange={(e) => {
              {
                setNewcard({...newcard, name:e.target.value});
              }
            }}
          />
        </div>
        <div class="mb-3">
          <label>Add CreationTime:</label>
          <input
            className="p-2 mx-4 my-2"
             onChange={(e) => {
              {
                setNewcard({...newcard, createdAt:e.target.value});
              }
            }}
          />
        </div>
        <div class="mb-3">
          <label>Add ImageSrc:</label>
          <input
            className="p-2 m-4"
              onChange={(e) => {
              {
                setNewcard({...newcard, avatar:e.target.value});
              }
            }}
          />
        </div>
        <button
          className="btn bg-success-subtle m-4"
          onClick={cardAdd}
        >
          ADD
        </button>
        <Link className='btn btn-secondary' to='/productList'>BACK</Link>
      </form>
    </>
  )
}

export default AddNew