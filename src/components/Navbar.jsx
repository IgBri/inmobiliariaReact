import CartWidget from "./CartWidget"
import "../css/Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="header">
            <div className="containerLogo">
                <Link to="/"><h1 className="logo">Paletta <br />Inmobiliaria</h1></Link>
            </div>
            <div className="containerCartWidget">
                <CartWidget/>
            </div>
        </div>
    )
}

export default Navbar