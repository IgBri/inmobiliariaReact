import ClearCartButton from "./ClearCartButton"

function Reservation({ order }) {
    
    //console.log(order) //order es un array

    return (
        <>
            <div className="reservation">
                <div className="contaienerBooking1">
                    <img src={order.imagen} alt="" className="reservationImage"/>
                    <div className="reservationInfo">
                        <span>Tipo de inmueble: {order.tipo}</span>
                        <span>Precio: {order.moneda}{order.precio}</span>
                    </div>
                </div>
                <div className="contaienerBooking2">
                    <div className="reservationDates">
                        <span>Desde: {order.periodoReservado.desde}</span>
                        <span>Hasta: {order.periodoReservado.hasta}</span>
                        <span>Cantidad de dias: {order.periodoReservado.qtyDias}</span>
                    </div>
                    <div className="reservationPrice">
                        <span>Precio final: USD {order.periodoReservado.precioTotal}</span>
                        <ClearCartButton clearId={order.id}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation