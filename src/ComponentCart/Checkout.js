import React from 'react'
import { Link } from 'react-router-dom';

const Checkout = ({ cart, cartSize }) => {
  return (
    <>
      <div id='checkoutContainer'>
        <h1 style={{ margin: "10vh", textAlign: "center", fontSize: "5vh" }}>{cartSize} Products Ordered</h1>
        <h1 style={{ marginTop: "3vh", textAlign: "center", fontSize: "5vh" }}>Thank You for Ordering From Cafena</h1>

        <Link to="/"><button style={{ fontSize: "3vh", marginLeft: "45%", padding: "1.5vh", fontWeight: "600", backgroundColor: "black", color: "white", borderRadius: "1vh",marginTop:"36vh" }} id="shopMore">Shop More ..</button></Link>
      </div>
    </>
  )
}

export default Checkout;
