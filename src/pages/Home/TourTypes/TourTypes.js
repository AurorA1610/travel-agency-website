import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSun, faHome } from '@fortawesome/free-solid-svg-icons';
import './TourTypes.css';

const TourTypes = () => {
    return (
        <div className="tour-types mt-5 py-4" id="tourtypes">
            <h2 className="mt-5 mb-4 packages-heading">" Popular Tour Types "</h2>
            <Row>
                <Col xs={12} md={4}>
                    <div class="d-flex justify-content-around border border-end-0 border-3 py-5">
                        <FontAwesomeIcon icon={ faHeart } size="6x" className="heart-icon" />
                        <h3 className="pt-4">Couple</h3>
                        <h6 className="pt-5">From $800</h6>
                    </div> 
                </Col>
                <Col xs={12} md={4}>
                    <div class="d-flex justify-content-around border border-end-0 border-3 py-5">
                        <FontAwesomeIcon icon={ faSun } size="6x" className="sun-icon" />
                        <h3 className="pt-4">Suggested</h3>
                        <h6 className="pt-5">From $1000</h6>
                    </div> 
                </Col>
                <Col xs={12} md={4}>
                    <div class="d-flex justify-content-around border border-end-0 border-3 py-5">
                        <FontAwesomeIcon icon={ faHome } size="6x" className="home-icon" />
                        <h3 className="pt-4">On Budget</h3>
                        <h6 className="pt-5">From $200</h6>
                    </div> 
                </Col>
            </Row>
        </div>
    );
};

export default TourTypes;