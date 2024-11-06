import { Link } from "react-router-dom"
import "../css/ContainerService.css"

function ContainerService() {
    return (
        <div className="services">
            <div className="itemService">
                <div className="item1">
                    <Link to="/propiedades">
                        <button>Alquileres temporarios</button>
                    </Link>
                </div>
            </div>
            <div className="itemService">
                <div className="item2">
                    <Link to="/propiedades">
                        <button>Propiedes para corretaje</button>
                    </Link>
                </div>
            </div>
            <div className="itemService">
                <div className="item3">
                    <Link to="/propiedades">
                        <button>Conocenos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContainerService