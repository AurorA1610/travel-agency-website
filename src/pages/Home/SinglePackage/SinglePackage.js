import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SinglePackage.css';

const SinglePackage = ({ singlePackage }) => {
    const { _id, name, description, img } = singlePackage;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300" />
                    <Card.Body className="singlePackage">
                    <Card.Title><h2 className="fw-bold mb-5">{name}</h2></Card.Title>
                    <Card.Text className="text-light">
                        {description}
                    </Card.Text>
                    </Card.Body>
                    <Link to={`/booking/${_id}`} className="booking-link">
                        <Button className="d-block w-100 booking-button">Book Now</Button>
                    </Link>
                </Card>
            </Col>
        </div>
    );
};

export default SinglePackage;