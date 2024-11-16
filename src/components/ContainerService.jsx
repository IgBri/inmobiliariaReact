import { Link } from "react-router-dom"

function ContainerService() {
    return (
        <div className="services">
            <div className="itemService i1">
                <div className="item">
                    <Link to="/propiedades">
                        <button>Alquileres temporarios</button>
                    </Link>
                </div>
            </div>
            <div className="itemService i2">
                <div className="item">
                    <Link to="/propiedadesCorretaje">
                        <button>Propiedes para corretaje</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContainerService