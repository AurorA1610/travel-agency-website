import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './WhyChooseUs.css';
import { faThumbsUp, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us p-5"  id="whychooseus">
            <h2 className="mb-3 p-4 fw-bold text-warning">Why Choose Us</h2>
            <div>
                <Row>
                    <Col xs={12} md={4}>
                        <div class="d-flex justify-content-around bg-secondary py-5 ps-2 border border-3">
                            <FontAwesomeIcon icon={faStar } size="6x" className="heart-icon" />
                            <div className="mx-3">
                                <h2>Hastle-free Traveling</h2>
                                <p className="text-light">
                                    Visa processing is not at all a challenge for us. We will give you the best airlines, best security and the best hotels.
                                </p>
                            </div>
                        </div> 
                    </Col>
                    <Col xs={12} md={4}>
                        <div class="d-flex justify-content-around bg-secondary py-5 ps-2 border border-3">
                            <FontAwesomeIcon icon={ faGlobe } size="6x" className="sun-icon" />
                            <div className="mx-3">
                                <h2>World Class Service</h2>
                                <p className="text-light">
                                    You will get the best accomodation, flights possible within a very low budget which will definitely please and satisfy you.
                                </p>
                            </div>
                        </div> 
                    </Col>
                    <Col xs={12} md={4}>
                        <div class="d-flex justify-content-around bg-secondary py-5 ps-2 border border-3">
                            <FontAwesomeIcon icon={ faThumbsUp } size="6x" className="home-icon" />
                            <div className="mx-3">
                                <h2>Best Price Guarantee</h2>
                                <p className="text-light">
                                    Our packages are designed in such a manner that the best facilities and services are available within a very low budget.
                                </p>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </div>
            <div>

            </div>
        </div>
    );
};

export default WhyChooseUs;