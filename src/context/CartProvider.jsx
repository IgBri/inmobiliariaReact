import { cartContext } from "./cartContext";
import { useState } from "react";

function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => setCart([...cart, item])

    const clearCart = (id) => {
        const removeWithId = cart.filter( propertie => propertie.id !== id)
        setCart(removeWithId)
    }

    const total = cart.length

    const getPrice = () => {
        const price = cart.map(propertie => propertie.precio*propertie.periodoReservado.qtyDias)
        console.log(price) //array con valores
        console.log(price.at(-1)) //valor
        return price
    }

    const getTotalPrice = () => {
        const price = cart.map(propertie => propertie.precio*propertie.periodoReservado.qtyDias) //este map me va a crear un array con todos los precios*cantidades
        const totalPrice = price.reduce((acc, current)=> acc + current, 0) //este reduce suma los precios y retorna el final
        return totalPrice
    }

    return(
        <cartContext.Provider value={{cart, addToCart, clearCart, total, getTotalPrice, getPrice, setCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider