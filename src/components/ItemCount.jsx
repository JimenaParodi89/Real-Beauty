import { useState } from "react";
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"

export const ItemCount = ({onAdd, stock}) => {
const [quantity, setQuantity] = useState(1);

const handleIncrease = () => {
    if(stock > quantity ) setQuantity(prev => prev + 1);
} 

const handleDecrease = () => {
    if(quantity > 1 ) setQuantity(prev => prev - 1);
} 

const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
} 

return  <div className="d-flex">
                <div style={{ padding: "0 10px"}} onClick={handleDecrease}><img src={minus} alt="+" width="40" height="40"/></div>
                <input type="number" value={quantity} readOnly/>
                <div style={{ padding: "0 10px"}} onClick={handleIncrease}><img src={plus} alt="+" width="40" height="40"/></div>
                <button type="button" onClick={handleAdd}>Agregar al carrito</button>
            </div>;
};