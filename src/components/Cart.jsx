import Badge from 'react-bootstrap/Badge';
import { useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { cartContext } from '../context/cartContext';
//import Reservation from "./Reservation"
import TypeReservation from "./TypeReservation"
import ClearCartButton from './ClearCartButton';
import "../css/Cart.css"


function OffCanvasCart({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {cart, total} = useContext(cartContext)

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                Mis reservas <Badge bg="secondary">{total}</Badge>
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mis reservas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <TypeReservation booking={cart}/>
                    <div className='containerClearButton'>
                        <ClearCartButton />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </> 
    );
}

function Cart() {
    return (
        <>
            {['bottom'].map((placement, idx) => (
                <OffCanvasCart key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default Cart