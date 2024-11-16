import Carousel from 'react-bootstrap/Carousel';
import ContainerService from "./ContainerService"

function Carrusel() {
    return (
        <div className='containerCarrusel'>
            <div className='containerImage'>
                <Carousel fade>
                    <Carousel.Item>
                        <div>
                            <img src="imagenes/Carrusel Images/Casa Carrusel.jpg" alt="" />
                        </div>
                        <Carousel.Caption>
                            <h3>Casa Villores</h3>
                            <p>Ubicada al sur de la ciudad de Mar del Plata</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img src="imagenes/Carrusel Images/Dpto Carrusel.jpg" alt="" />
                        </div>
                        <Carousel.Caption>
                            <h3>Departamento Madero</h3>
                            <p>Exclusivo departamento en Puerto Madero</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img src="imagenes/Carrusel Images/Quinta Carrusel.jpg" alt="" />
                        </div>
                        <Carousel.Caption>
                            <h3>Quinta Los Ombues</h3>
                            <p>
                                Perfecta eleccion para disfrutar de la naturaleza y amplitud de una casa de campo.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='containerInfo'>
                <ContainerService/>
            </div>
        </div>
    );
}

export default Carrusel;