import { cartContext } from "./cartContext";
import { useState } from "react";

//Creamos un componente como proveedor del cart
function CartProvider ({children}) {
    //funcion de estado que almacena el contenido del carrito
    const [cart, setCart] = useState([])

    //setCartDays(days) como parametro recibe {...cart, item}
    const addToCart = (item) => setCart([...cart, item])

    const clearCart = () => setCart([])

    const total = cart.length

    const getPropiedades = (inmuebles) => new Promise((res, rej)=> {
        if (inmuebles.length !== 0){
            setTimeout(()=>{
                res(inmuebles)
            },500)
        } else {
            rej(console.log("error"))
        }
    })

    /*const getReservedDays = () => {
        //de esta forma vemos en el carrito la cantidad de dias reservados (o count seleccionados)
        /*const reservedDays = cart.map(item => item.diasReservados)
        const total = reservedDays.reduce((contador, current)=> contador + current,0)

        //const total = cart.length

        return total
    }*/

    return(
        <cartContext.Provider value={{cart, addToCart, clearCart, total, getPropiedades}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider