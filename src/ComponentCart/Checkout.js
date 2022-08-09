import React from 'react'

const Checkout = ({cart,cartSize}) => {
  return (
    <>
    <div className='containerCheckout' style={checkout}>
    <h1 style={{margin:"20vh auto",textAlign:"center",fontSize:"6vh"}}>{cartSize} Products Ordered</h1>
    <h1 style={{textAlign:"center"}}>Thank You for Ordering</h1>
    </div>
    </>
  )
}

export default Checkout;

const checkout = {
  position:"absolute",
  top:"0",
  right:2,
  left:0,
  height:"100vh",
  background:"url('https://www.psdtemplatesblog.com/wp-content/uploads/2015/07/Shopify-Checkout.gif')",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"bottom",
  backgroundSize:"contain",
}