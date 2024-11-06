import { cartContext } from "../context/cartContext"
import "./../css/ItemCount.css"
import { useState, useContext } from "react"

function ItemCount ({detail}) {

    const [count, setCount] = useState(0)
    const {addToCart} = useContext(cartContext)

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)
    const handleAddToCart = () => addToCart({...detail, diasReservados: count})

    return(
        <div className="contador">
            <span>Selecciona la cantidad de dias</span>
            <div>
                <div>
                    <button onClick={handleSub}>-</button>
                    <button onClick={handleAddToCart}>Reservo {count} dias</button>
                    <button onClick={handleAdd}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount