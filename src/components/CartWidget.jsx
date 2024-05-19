import { useContext } from "react"
import cart from "../assets/cart.png"
import { CartContext } from "../contexts/CartContext"

import { Link } from "react-router-dom"


const CartWidget = () => {

    const { items } = useContext(CartContext);

    const total = items.reduce((acc, elem) => acc + elem.quantity, 0)

    return (
        <Link to="./cart">
            <div>
            <img src={cart} alt="cart-widget" width="40" height="40"/>
            <span>{total}</span>
            </div>
        </Link>
    )
}

export default CartWidget