import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="mb-5 pb-5">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="750"
                src="https://i.ibb.co/zsn5xT8/img1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="text-danger fw-bold">Let us transport you with our highly affordable and reliable holiday packages</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="750"
                src="https://i.ibb.co/TWRnXnH/img2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="text-danger fw-bold">Make your next trip awesome</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="750"
                src="https://i.ibb.co/HpL0wqV/img3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="text-danger fw-bold">Live your travel dreams.</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;