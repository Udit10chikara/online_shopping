import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
export default function Nav() {
  const mycart = useSelector((state)=>state.cartData);
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="products">Products</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link disabled" to=""  aria-disabled="true">About</Link>
        </li>
      </ul>
      <div className="buttons">
        <Link to="cart" className="btn btn-outline-darkline ms-2"><i className="fa fa-shopping-cart me-1"> Cart ({mycart.length})</i></Link>
        
      </div>
    </div>
  </div>
</nav>
</div>
  )
}
