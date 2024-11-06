import Carousel from 'react-bootstrap/Carousel';
import "../css/Carrusel.css"
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
                        {/*<ExampleCarouselImage text="First slide" />*/}
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img src="imagenes/Carrusel Images/Dpto Carrusel.jpg" alt="" />
                        </div>
                        {/*<ExampleCarouselImage text="Second slide" />*/}
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img src="imagenes/Carrusel Images/Quinta Carrusel.jpg" alt="" />
                        </div>
                        {/*<ExampleCarouselImage text="Third slide" />*/}
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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