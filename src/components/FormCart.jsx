import { createBooking } from '../firebase/db';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { serverTimestamp, } from 'firebase/firestore';

function FormCart() {

    const { cart, getTotalPrice, setCart } = useContext(cartContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        
        const nombre = e.target[0].value
        const apellido = e.target[1].value
        const numTel = e.target[2].value
        const correo = e.target[3].value
        const dni = e.target[4].value
        /*const {nombre, apellido, numTel, correo, dni} = form*/

        //FORMATO QUE VAN A TENER TODAS LAS RESERVAS - objetos
        const generalOrder = {
            buyer: {nombre, apellido, numTel, correo, dni},
            properties: cart,
            date: serverTimestamp(),
            total: getTotalPrice()
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "¿Deseas reservar esta propiedad?",
            text: "La reserva seleccionada tiene un costo total de: U$D"+ getTotalPrice(),
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Si, reservo!",
            cancelButtonText: "Cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Reserva exitosa!",
                    text: "Has realizado tu reserva con exito",
                    icon: "success"
                });
                createBooking(generalOrder)
                setCart([])

                e.target.reset()
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Reserva cancelada",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className="containerForm">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" required />
                <input type="text" placeholder="Apellido" required />
                <input type="number" placeholder="2364 000000" required />
                <input type="email" placeholder="juan@gmail.com" required />
                <input type="number" placeholder="00.000.000" />
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    )
}

export default FormCart