import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Reservation from "./Reservation"
import "../css/TypeReservation.css"

function TypeReservation({ booking }) {

    console.log(booking)

    const temporalBooking = booking.filter( onlyBooking => onlyBooking.modalidad == "Alquiler diario")
    const anualBooking = booking.filter( onlyBooking => onlyBooking.modalidad !== "Alquiler diario")

    console.log(temporalBooking)
    console.log(anualBooking)

    return (
        <>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="home" title="Reservas temporales">
                    <Reservation order={temporalBooking} />
                </Tab>
                <Tab eventKey="profile" title="Solicitudes de corretaje">
                    <Reservation order={anualBooking} />
                </Tab>
            </Tabs>
        </>
    );
}

export default TypeReservation;