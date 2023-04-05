// import LoginModal from "./login";
import { BrowserRouter, Routes, Route }from "react-router-dom";
import Layout from "./layout";
import Account from "./account";
export default function  Navigation(){
    return (
    <nav>
    <ul style={{position:"fixed"}}>
    <div><br></br></div>
    <a href="" style={{paddingRight:"2vw"}}>Home</a><br></br>
    <a href="#tutorial" style={{paddingRight:"2vw"}}>Tutorial</a><br></br>
    <a href="#product" style={{paddingRight:"2vw"}}>Products</a><br></br>
    <a href="#contact" style={{paddingRight:"2vw"}}>Contact</a>
    < div>
    <BrowserRouter >
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route exact path="Account" element={<Account />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </ul>
    </nav>
    );
    }