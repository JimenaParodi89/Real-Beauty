import Container from 'react-bootstrap/Container'; 
import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ product }) => {

    const {addItem} = useContext(CartContext);

    const add = (quantity) =>
        {
            addItem(product, quantity);
        }

   return (
    <Container className="mt-4">
        <h1>{product.name}</h1>
        <img src={product.img} alt="s" width="50%" height="50%"/>
        <h4>{product.details}</h4>
        <h4>Stock: {product.stock}</h4>
        <h4>Precio: {product.price}</h4>
        <ItemCount stock={product.stock} onAdd={add}/>
    </Container>
    )
}