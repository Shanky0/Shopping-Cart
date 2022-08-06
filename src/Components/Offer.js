import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "./style.css"
import food from '../ComponentCart/Products.json';



const Offer = (props) => {
  
  const addToCart = (e) => {
    const item = e.target.parentNode.id;
    food.forEach(val=>{
      if(val.title === item)
      {  
        if(val.cart >= 1){
          val.cart++;
        }else{
          val.cart++;
          props.cart(props.cartSize+1);
        }
      }
    })    
  }

  return (
    <>
      <section id="offer">
        <h1>OUR <span>Offers</span></h1>
        <div id="box-container">
          {food.map((val,index) => {
            return <div className="box" id={val.title} key={index}>
              <img src={require(`../Images/${val.filename}`)} alt="product_image" />
              <h3>{val.title} </h3>
              <div className="price">₹{val.price} <span>₹{Number(val.price) + 50}</span></div>
              <button className="btn" onClick={addToCart}> Add to Cart</button>
            </div>
          })}
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Offer
