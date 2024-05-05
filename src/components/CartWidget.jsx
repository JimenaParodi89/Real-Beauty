import cart from "../assets/cart.png"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <Link to="./cart">
            <div>
            <img src={cart} alt="cart-widget" width="40" height="40"/>
            0
            </div>
        </Link>
    )
}

export default CartWidget