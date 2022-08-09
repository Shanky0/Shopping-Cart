import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cart from './ComponentCart/Cart';
import Checkout from './ComponentCart/Checkout'
import Main from './Components/Main';
import Offer from './Components/Offer';


const App = () => {
    var [cartSize, setCartSize] = useState(0);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Header cart={setCartSize} cartSize={cartSize} />} >
                        <Route path='/' element={<Main cart={setCartSize} cartSize={cartSize} />} >
                            <Route path='/' element={<Offer cart={setCartSize} cartSize={cartSize} />} />
                        </Route>
                        <Route path='/cart' element={<Cart cart={setCartSize} cartSize={cartSize} />}  />
                        <Route path='/checkout' element={<Checkout cart={setCartSize} cartSize={cartSize} />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App