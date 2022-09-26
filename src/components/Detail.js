import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import '../css/product.css';
import { AUTENTICATE_API } from '../services/Result';
export default function Detail() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [data,setData] = useState();

    const getData = ()=>{
        const url = `http://localhost:3001/products/${id}`;
        AUTENTICATE_API.guestnews_listByUrl(url).then(response=>{
               setData(response);
            
        }).catch(error=>{
             //console.log(error);
        })
    }
    useEffect(()=>{
        getData()
   },[])
    const Add=(item)=>{
        alert("Add to cart successfully")
         dispatch({type:'ADDCART',payload:item})
    }

  return (
    <div>
        <div className="container">
    <div className="col-lg-8 border p-3 main-section bg-white">
        
        <div className="row m-0">
        
            <div className="col-lg-4 left-side-product-box pb-3">
                <img src={data?.image} className="border p-3"/>
                {/* <span className="sub-img">
                    <img src="http://nicesnippets.com/demo/pd-image2.jpg" className="border p-2">
                    <img src="http://nicesnippets.com/demo/pd-image3.jpg" className="border p-2">
                    <img src="http://nicesnippets.com/demo/pd-image4.jpg" className="border p-2">
                </span> */}
            </div>
            <div className="col-lg-8">
                <div className="right-side-pro-detail border p-3 m-0">
                
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <p className="m-0 p-0">{data?.title}</p>
                        </div>
                        <div className="col-lg-12">
                            <p className="m-0 p-0 price-pro">{data?.price}</p>
                            <hr className="p-0 m-0"/>
                        </div>
                        <div className="col-lg-12 pt-2">
                            <h5>Product Detail</h5>
                            <span>{data?.description}</span>
                            <hr className="m-0 pt-2 mt-2"/>
                        </div>
                        <div className="col-lg-12">
                            <p className="tag-section"><strong>Tag : </strong>{data?.category}</p>
                        </div>
                        <div className="col-lg-12">
                            <h6>Quantity : {data?.quantity}</h6>
                            </div>
                        <div className="col-lg-12 mt-3">
                            <div className="row">
                                <div className="col-lg-3">
                                    <button className="btn btn-danger w-100" onClick={()=>Add(data)}>Add To Cart</button>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="cart" className="btn btn-success w-100"><i className="fa fa-shopping-cart me-1"> Go to Cart</i></Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        {/* <div className="row">
            <div className="col-lg-12 text-center pt-3">
                <h4>More Product</h4>
            </div>
        </div>
        <div className="row mt-3 p-0 text-center pro-box-section">
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-image1.jpg"/>
                </div>
            </div>
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images2.jpg"/>
                </div>
            </div>
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images3.jpg"/>
                </div>
            </div>
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images4.jpg"/>
                </div>
            </div>
        </div> */}
    </div>
</div>
    </div>
  )
}
