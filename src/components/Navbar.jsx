import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';
import ButtonCart from "./ButtonCart";

function Navbar() {
    return (
        <div className="header">
            <div className="containerLogo">
                <Link to="/"><h1 className="logo">Paletta <br />Inmobiliaria</h1></Link>
            </div>
            <div className="containerCartWidget">
                <CartWidget/>
                <div className="containeButtonrCart">
                    <ButtonCart />
                </div>
            </div>
        </div>
    )
}

export default Navbar