//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Cart from './components/Cart';
function App() {
  return (
    <div className="containter">
     <BrowserRouter>
      <Nav/>
       <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/products/:id" element={<Detail/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
