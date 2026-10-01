import React, { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";

function AddDetails() {
  const { id } = useParams();
  const url = import.meta.env.VITE_API_URL + `/${id}`;
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    id: "",
    name: "",
    createdAt: "",
    avatar: "",
  });
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetail(data);
      });
  },[url]);
  function updateData(e){
    e.preventDefault();
      fetch(url,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(detail)
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        navigate('/productList')
      })
  }
  if (!detail) {
    return <div style={{ color: "black" }}>Loading</div>;
  }
  return (
    <>
      <form className="m-4">
        <div class="mb-3">
          <label>Add Id:</label>
          <input
            className="p-2 m-4"
            pattern="[0,9]{2}"
            value={detail.id}
            onChange={(e) => {
              {
                setDetail({...detail, id:e.target.value});
              }
            }}
          />
        </div>
        <div class="mb-3">
          <label>Add Name:</label>
          <input
            className="p-2 m-4"
            value={detail.name}
           onChange={(e) => {
              {
                setDetail({...detail, name:e.target.value});
              }
            }}
          />
        </div>
        <div class="mb-3">
          <label>Add CreationDetail:</label>
          <input
            className="p-2 mx-4 my-2"
            value={detail.createdAt}
             onChange={(e) => {
              {
                setDetail({...detail, createdAt:e.target.value});
              }
            }}
          />
        </div>
        <div class="mb-3">
          <label>Add ImageSrc:</label>
          <input
            className="p-2 m-4"
            value={detail.avatar}
              onChange={(e) => {
              {
                setDetail({...detail, avatar:e.target.value});
              }
            }}
          />
        </div>
        {/* <Link to='/productList'><button className='btn btn-secondary m-4'>Back</button></Link> */}
        <button
          className="btn btn-secondary m-4"
          onClick={() => navigate("/productList")}
        >
          BACK
        </button>
          <button class="btn bg-success-subtle m-4" type="submit" onClick={updateData}>SAVE</button>
      </form>
    </>
  );
}

export default AddDetails;
