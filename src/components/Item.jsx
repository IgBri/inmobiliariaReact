import "../css/Item.css"
//import Descripcion from "./Descripcion"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Item ( {item} ) {
    return(
        <>
            <div className="card">
                    <div className="card-body">
                        <div className="imagen">
                            <img src={item.imagen} alt="" />
                        </div>
                        <h5 className="card-title">{item.tipo}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{item.direccion}</h6>
                        <p className="card-text">{item.descripcion}</p>
                        <div className="info">
                            <span className="card-info">{item.modalidad}</span>
                            <span className="card-info">U$D {item.precio}</span>
                        </div>
                        <Button variant="outline-secondary" as={Link} to={`/Item/${item.id}`} className="boton">Ver mas</Button>
                    </div>
                </div>
        </>
    )
}

export default Item