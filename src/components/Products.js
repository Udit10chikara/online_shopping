import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { AUTENTICATE_API } from '../services/Result';
export default function Products() {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState();
    const [loading,setLoading] = useState(false);
    
    
    async function Fetchdata(){
        const url = await("http://localhost:3001/products");
        AUTENTICATE_API.guestnews_listByUrl(url).then(response=>{
            setFilter(response);
            setData(response);
            setLoading(false);
            }
         )
    }
    useEffect(()=>{
         Fetchdata()
    },[])

const Loading=()=>{
    return(
   <div>
       Loading..........
   </div>
    )
}  
const Result=(cat)=>{
    const updateData = data.filter((x)=>x.category == cat);
    setFilter(updateData)

} 
const Showcontent = () =>{
   return(
    <>
     <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>Result("men's clothing")}>Men</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>Result("women's clothing")}>Women</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>Result("jewelery")}>Jewellery</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>Result("electronics")}>Electronics</button>
     </div>
{filter?.map((val)=>{
    return(
      <div className="col-md-3 mb-4" key={val.id}>
          <div className="card h-100 text-center p-4" >
           <img src={val.image} className="card-img-top" alt={val.title} height="250px"/>
            <div className="card-body">
                <h5 className="card-title">{val.title.substring(0,12)}</h5>
                <p className="card-text lead fw-bold">${val.price}</p>
                <Link to={`products/${val.id}`} className="btn btn-outline-dark">Detail</Link>
            </div>
          </div>
      </div>
      )
    }
)}
   
  
   </>
   )
} 
  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Product</h1><hr/>
                </div>

            </div>
            <div className="row justify-content-center">
               {loading?<Loading/>:<Showcontent/>}
            </div>
        </div>
    </div>
  )
}
