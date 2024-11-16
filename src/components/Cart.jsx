import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import Reservation from "./Reservation"
import FormCart from './FormCart';

function Cart() {
    const { cart } = useContext(cartContext)
    return (
        <div className='containerCart'>
            <div className='containerBooking'>
                {cart.map(booking =>
                    <Reservation order={booking} key={booking.id} />
                )}
            </div>
            <div className='containerForm'>
                <FormCart/>
            </div>
        </div>
    )
}

export default Cart