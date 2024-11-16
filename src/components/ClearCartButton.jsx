import { useContext } from "react";
import { cartContext } from "../context/cartContext";

function ClearCartButton ({clearId}) {

    const {clearCart} = useContext(cartContext)

    const handleClearCart = () => clearCart(clearId)

    return(
        <>
            <button onClick={handleClearCart}>Borrar del carrito</button>
        </>
    )
}

export default ClearCartButton