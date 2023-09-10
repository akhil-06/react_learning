import React, { Component } from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFLQ6ovowvFag1LhbIVJLDCoP0jOIRGAWCg&usqp=CAU" className="logo"/>
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

const RestrauntCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ns68mxfgkgsrrs3wngwz" alt="food image"/>
      <h3>Annapoorna</h3>
      <h4>Biryani, North India</h4>
      <h4>4.7 Stars</h4>
      <h4>38 Minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <RestrauntCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (<div className="app">
    <Header/>
    <Body/>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

