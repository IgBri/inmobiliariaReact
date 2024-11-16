import { cartContext } from "../context/cartContext"
import { useState, useContext } from "react"

function ItemCount({ detail }) {

    const [initialDate, setinitialDate] = useState()
    const [finalDate, setFinalDate] = useState()
    const { addToCart } = useContext(cartContext)

    const handleAddToCart = () => {
        //addToCart({ ...detail, periodoReservado: dates })

        if (initialDate && finalDate !== "") {
            addToCart({ ...detail, periodoReservado: dates })
            Swal.fire({
                title: "Reserva guardada",
                icon: "success"
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No has seleccionado las fechas!",
            })
        };
    }
    const cantidadDeDias = () => {
        const initialDateNumber = new Date(initialDate)
        const finalDateNumber = new Date(finalDate)
    
        const diferencia = finalDateNumber - initialDateNumber
        const diferenciaDias = diferencia / (1000 * 60 * 60 * 24)
    
        return diferenciaDias
    }
    
    const dates = {
        desde: initialDate,
        hasta: finalDate,
        qtyDias: cantidadDeDias(),
        precioTotal: cantidadDeDias() * detail.precio
    }
    
    const handleInitialDate = (e) => {
        setinitialDate(e.target.value)
    }
    const handleFinalDate = (e) => {
        setFinalDate(e.target.value)
    }
    
    return (
        <div className="bookingInfo">
            <form className="dates" >
                <div className="initialDate">
                    <label htmlFor="">Desde</label>
                    <input type="date" onChange={handleInitialDate} />
                </div>
                <div className="finishDate">
                    <label htmlFor="">Hasta</label>
                    <input type="date" onChange={handleFinalDate} />
                </div>
            </form >
            <button type="submit" onClick={handleAddToCart}>Reservar</button>
        </div>
    )
}



export default ItemCount