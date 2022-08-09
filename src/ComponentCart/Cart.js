import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import product from './Products.json'


const Cart = ({ cart, cartSize,totalPrice,setTotalPrice,discount,setDiscount }) => {
  var price = Number(totalPrice);
  var dis= Number(discount);
  var [arr, setArr] = useState(product);

  const add = (e) => {
    const name = e.target.closest("#cartContainer").className;
    product.forEach(val => {
      if (val.title.trim().toLowerCase() === name.trim().toLowerCase()) {
        val.cart++;
        price = price + val.price;
        dis+=5;
      }
    })
    setArr([...product]);
    setTotalPrice((price.toFixed(1)));
    setDiscount(dis);
  }

  const sub = (e) => {
    const name = e.target.closest("#cartContainer").className;
    product.forEach(val => {
      if (val.title.trim().toLowerCase() === name.trim().toLowerCase()) {
        if (val.cart <= 1)
          val.cart = 1;
        else {
          val.cart--;
          price -= val.price;
          dis-=5;
        }
      }
    })
    setArr([...product]);
    setTotalPrice((price.toFixed(1)));
    setDiscount(dis);

  }

  const remove = (e) => {
    const name = e.target.closest("#cartContainer").className;
    product.forEach(val => {
      if (val.title.trim().toLowerCase() === name.trim().toLowerCase()) {
        price -= Number((val.cart) * (val.price)).toFixed(1);
        dis -= ((val.cart)*5).toFixed(1);
        val.cart = 0;
        cart(--cartSize);
      }
    })
    setArr([...product]);
    setTotalPrice((price.toFixed(1)));
    setDiscount(dis);
  }

  const empty = () => {
    product.forEach(val => {
      val.cart = 0;
    })
    setArr([...product]);
    setTotalPrice(0);
    setDiscount(0);
    cart(0);
  }

  return (
    <>
      <div id="containerAll">
        <div id='itemContainer'>
          <h1> Cart Details</h1>
          {arr.map((val,index) => {
            if (val.cart >= 1)
              return (
                <div id='cartContainer' className={val.title} key={index}>
                  <div className="cartitemImg">
                    <img src={require(`../Images/${val.filename}`)} alt={val.title} />
                    <div><span onClick={sub} className="minus">&#8722;</span><input placeholder={val.cart} disabled /><span onClick={add} className="plus">	&#43;</span></div>
                  </div>
                  < div id='itemDetails' >
                    <h3>{val.title}</h3>
                    <p>{val.description}</p>
                    <h5>Price : ₹{(val.price * val.cart).toFixed(1)}</h5>
                    <div className="extra" onClick={remove}><h6>Remove</h6></div>
                  </div >
                </div>
              )
          })}
        </div>


        <div id='totalDisplay'>
          <h1>Price Details</h1>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "auto", alignItems: "center", fontSize: "1.5rem" }}><h2>Price ( {cartSize}  items ) </h2> <span>{`₹ ${totalPrice}`}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "auto", marginTop: "8vh", alignItems: "center", fontSize: "1.5rem" }}>  <h2>Discont</h2> <span>{`- ₹ ${discount}`}</span></div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "auto", marginTop: "8vh", alignItems: "center" }}><h2 style={{ color: "tomato" }}>Total Amount</h2><span style={{ fontSize: "2rem", color: "tomato" }}>{`₹ ${totalPrice}`}</span></div>
          <Link to="/checkout"><button id='placeOrder'>Place Order</button></Link>
          <button id='empty' onClick={empty}>Empty Cart</button>
        </div>
      </div>
    </>
  )
}

export default Cart



