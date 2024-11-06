import "../css/Reservation.css"

function Reservation ({order}) {
    console.log(order)
    return(
        <>
            {order.map(onlyOrder => 
                <div className="reservation">
                    <span>{onlyOrder.tipo}</span>
                    <span>{onlyOrder.moneda}{onlyOrder.precio}</span>
                </div>
            )}
        </>
    )
}

export default Reservation