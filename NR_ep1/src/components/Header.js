import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
  
    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo"/>
        </div>
  
        <div className="nav-items">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact us</a></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              // console.log(btnName);
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }


  export default  Header;