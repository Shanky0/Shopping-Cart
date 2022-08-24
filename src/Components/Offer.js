import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./style.css"
import food from '../ComponentCart/Products.json';



const Offer = (props) => {

  const addToCart = (e) => {
    const item = e.target.parentNode.id;
    food.forEach(val => {
      if (val.title === item) {
        val.cart++;
        props.cart(props.cartSize + 1);
        props.setDiscount(props.discount + 5);
        props.setTotalPrice(Number(Number(props.totalPrice) + val.price).toFixed(1))
      }
    })
  }
  const removeFromCart = (e) => {
    const item = e.target.parentNode.id;
    food.forEach(val => {
      if (val.title === item) {
        val.cart--;
        props.cart(props.cartSize - 1);
        props.setDiscount(props.discount - 5);
        props.setTotalPrice(Number(Number(props.totalPrice) - val.price).toFixed(1))
      }
    })
  }




  return (
    <>
      <section id="offer">
        <h1>OUR <span>Menu</span></h1>
        <div id="box-container">
          {food.map((val, index) => {
            return <div className="box" id={val.title} key={index}>
              <img src={require(`../Images/${val.filename}`)} alt="product_image" />
              <h3>{val.title} </h3>
              <div className="price">₹{(val.price).toFixed(1)} <span>₹{Number((val.price).toFixed(1)) + 5}</span></div>
              <Link to={`/product/${val.filename[0]}`} className='btn btnDetails'>View Details</Link>
              {val.cart < 1 ? <button className="btn btnAdd" onClick={addToCart}> Add to Cart</button> : <button className="btn btnRemove" onClick={removeFromCart}> Remove from Cart</button>}
            </div>
          })}
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Offer
