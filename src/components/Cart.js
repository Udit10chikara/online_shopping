import React,{useEffect} from 'react'
import { useSelector,dispatch, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
//import '../css/cart.css';
export default function Cart() {
    const cart = useSelector((state)=>state.cartData);
    const totalAmount = useSelector((state)=>state.totalAmount);
    const totalItem = useSelector((state)=>state.totalItem);
    const dispatch = useDispatch();
    const Dlt=(id)=>{
      dispatch({type:'DELETE',payload:id})

    }
    const Increment=(id)=>{
      dispatch({type:'INC',payload:id})

    }
    const Decrement=(id)=>{
      dispatch({type:'DEC',payload:id})

    }
    useEffect(()=>{
      dispatch({type:'total'})
    },[cart])
  return (
    <div>
       <section className="h-100 h-custom" style={{backgroundColor: ""}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2" style={{borderRadius: "10px"}}>
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 className="mb-0 text-muted">{totalItem} items</h6>
                    </div>
                    <hr className="my-4"/>
  
                    <div className="row mb-4 d-flex justify-content-between align-items-center" style={{gap:"1rem"}}>
                       {cart.map((val,i)=>
                        <div className="row" key={val.id}>
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={val.image} className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="col-lg-6">{val.title}</h6>
                                
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 col-xl-3">
                            <a onClick={()=>Decrement(val.id)}> <i className="fa fa-minus"></i> </a>
                            <button className="col-lg-3" > {val.quantity} </button>
                               <a onClick={()=>Increment(val.id)}> <i className="fa fa-plus"></i> </a>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">{val.price*val.quantity}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                {/* <a href="#!" className="text-muted"><i className="fa fa-trash"></i></a> */}
                               <a onClick={()=>Dlt(val.id)}><img src="https://img.icons8.com/small/16/000000/filled-trash.png"/></a> 

                            </div>
                            <hr className="my-4"/>
                      </div>
                      
                      )}
                    </div>
  
                    {/* <hr className="my-4"/> */}
                    <div className="pt-5">
                      <h6 className="mb-0"><Link to="/" className="text-body"><i
                            className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                    </div>
                  </div>
                </div>
                <aside className="col-lg-3 my-5 py-5" style={{paddingTop:"25px"}}>
                <div className="card mb-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group"> <label>Have coupon?</label>
                                <div className="input-group"> <input type="text" className="form-control coupon" name="" placeholder="Coupon code"/> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                  
                    <div className="card-body">
                        <dl className="dlist-align">
                            <dt>Total price:</dt>
                            <dd className="text-right ml-3">{totalAmount}</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Discount:</dt>
                            <dd className="text-right text-danger ml-3">Total</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Total: {totalAmount}</dt>
                            <dd className="text-right  ml-3"><strong>Shopping Amount : </strong>{totalAmount}</dd>
                        </dl>
                        <hr/> <a  className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                    </div>
                 
                </div>
            </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
