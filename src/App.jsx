import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import ItemListContainer from "./components/ItemListContainer";
import Container from 'react-bootstrap/Container'; 
import ItemDetailContainer from  "./components/ItemDetailContainer"
import {Provider} from "./contexts/CartContext"

const App = () => {
 return (
   <Container>
    <BrowserRouter>
    <Provider>
    <NavBar />
     <Routes>
      <Route path="/" element = {<ItemListContainer />} />
      <Route path="/category/:id" element = {<ItemListContainer />} />
      <Route path="/item/:id" element = {<ItemDetailContainer />} />
      <Route path="/cart" element = {<Cart />} />
     </Routes>
     </Provider>
     </BrowserRouter>
   </Container>
 );
};

export default App;