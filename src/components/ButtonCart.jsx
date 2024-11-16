import Button from 'react-bootstrap/Button';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';

function ButtonCart() {
    const { total } = useContext(cartContext)
    return (
        <>
            <Button as={Link} to="carrito/" variant="primary" className="me-2">
                <span>Mis reservas <Badge bg="secondary">{total}</Badge></span>
            </Button>
        </>
    )
}

export default ButtonCart