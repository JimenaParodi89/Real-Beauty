import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import Container from 'react-bootstrap/Container'; 
import ItemDetailContainer from  "./components/ItemDetailContainer"

const App = () => {
 return (
   <Container>
    <BrowserRouter>
    <NavBar />
     <Routes>
      <Route path="/" element = {<ItemListContainer />} />
      <Route path="/category/:id" element = {<ItemListContainer />} />
      <Route path="/item/:id" element = {<ItemDetailContainer />} />
     </Routes>
     </BrowserRouter>
   </Container>
 );
};

export default App;