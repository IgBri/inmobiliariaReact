import "./../css/ItemCount.css"
//import Practicas from "./Practicas"

import { useState } from "react"
//Importo el HOC
//import { withNameSelector } from "../hoc/withNameSelector"

function ItemCount () {

    const [count, setCount] = useState(0)

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)
    
    console.log(count)

    return(
        <div className="contador">
            <span>Selecciona la cantidad de dias</span>
            <div>
                <button onClick={handleSub}>-</button>
                <button>{count}</button>
                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount