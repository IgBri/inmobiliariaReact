import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to="/tipo/Casa">Casas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/tipo/Departamento">Departamentos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/tipo/Quinta">Quintas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/tipo/Comercial">
                    Comerciales
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default CartWidget