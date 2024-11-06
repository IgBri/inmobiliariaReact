import { useContext } from "react";
import { cartContext } from "../context/cartContext";

function ClearCartButton () {

    const {clearCart} = useContext(cartContext)

    const handleClearCart = () => clearCart()

    return(
        <>
            <button onClick={handleClearCart}>Borrar carrito</button>
        </>
    )
}

export default ClearCartButton