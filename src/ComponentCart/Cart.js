import React from 'react';
import './cart.css';
import product from './Products.json'

const Cart = ({ cart, cartSize }) => {

  const add = (cart2)=>{
    cart(++cartSize);
    // cart2++;
  }
  const sub =(cart2)=>{
    cart(--cartSize);
    // cart2--;
  }


  return (
    <>
      <div id='itemContainer'>
        {product.map((val, index) => {
          if (val.cart >= 1)
            return (
              <div id='cartContainer' key={index}>
                <div className="cartitemImg">
                  <img src={require(`../Images/${val.filename}`)} alt={val.title} />
                  <div><button onClick={sub}>-</button><input placeholder={val.cart} disabled /><button onClick={add}>+</button></div>

                </div>
                < div id='itemDetails' >
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                  <h5>₹ {val.price}</h5>
                  <div className="extra"><h3>Remove</h3></div>
                </div >
              </div>
            )

        })}
      </div>
      <div id='placeOrder'><button>Place Order</button></div>
    </>
  )
}

export default Cart



