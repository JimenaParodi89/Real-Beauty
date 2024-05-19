import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext"

export const Cart = () => {

    const intialValues = {
        name: "",
        phone:"",
        email: ""
    }

    const [values, setValues] = useState(intialValues)
    const { items,clear, removeItem } = useContext(CartContext);

    const total = () => items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const handleChange = (ev) => {
        setValues((prev) => {
            return {
                ...prev,
                [ev.target.name] : ev.target.value,
            }
        })
    }

    const handleSubmit = (ev) => {
       
    }

    const handleClear = () => clear()
    const handleRemove = (id) => removeItem(id)
    
    return (<Container className="mt-4"><h1>Productos:</h1>{items.map(i => {
        return (
        <ul key={i.name}>
            <li>Prod: {i.name}</li>
            <li>Cant: {i.quantity}</li>
            <li>$ {i.price}</li>
            <li onClick={() => handleRemove(i.id)}>X</li>
        </ul>)
    })}
    <div>
        Total: {total()}
        <button onClick={handleClear}>Vaciar</button>
    </div>
    <form>
        <label>Nombre</label>
        <input 
            type="text" 
            value={values.name} 
            name="name" 
            onChange={handleChange} />
        <label>Celu</label>
        <input 
            type="text" 
            value={values.phone} 
            name="phone" 
            onChange={handleChange} />
        <label>Email</label>
        <input 
            type="text" 
            value={values.email} 
            name="email" 
            onChange={handleChange} />
            <button type="button" onClick = {handleSubmit}>Enviar</button>
    </form>
    </Container>);
};

export default Cart