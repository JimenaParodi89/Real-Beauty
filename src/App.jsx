import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import Container from 'react-bootstrap/Container'; 

const App = () => {
 return (
   <Container>
     <NavBar />
     <ItemListContainer greeting={'Bienvenidos'}/>
   </Container>
 );
};

export default App;