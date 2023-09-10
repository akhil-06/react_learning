import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    )
  }


  export default  Header;