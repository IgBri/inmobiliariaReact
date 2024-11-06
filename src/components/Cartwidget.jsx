import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to="/propiedades/Casa">Casas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/propiedades/Departamento">Departamentos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/propiedades/Quinta">Quintas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/propiedades/Comercial">Comerciales</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default CartWidget