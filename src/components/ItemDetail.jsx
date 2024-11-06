import "../css/ItemDetail.css"
import ItemCount from "./ItemCount"

function ItemDetail ({detail}) {
    return(
        <div className="itemDetail">
            <div className="item">
                <img src={detail.imagen} alt="" />
            </div>
            <div className="detail">
                <h2>{detail.direccion}</h2>
                <h5>{detail.tipo}</h5>
                <p>{detail.descripcion}</p>
                <div className="itemInfo">
                    <span>Modalidad: {detail.modalidad}</span>
                    <span>Precio: ${detail.precio}</span>
                </div>
                <ItemCount detail={detail}/>
            </div>
        </div>
    )
}

export default ItemDetail