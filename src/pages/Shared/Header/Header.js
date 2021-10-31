import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark"  id="home" className="nav-bar">
                <Container className="container-fluid">
                    <Navbar.Brand href="#home" className="float-start">
                        <img height="100" width="100" src="https://i.ibb.co/yPmLQ9D/logo.png" alt="" />
                        <h4 className="text-secondary mt-2">Travel.com</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">
                            <Button variant="info" className="fw-bold">Home</Button>
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#whychooseus">
                            <Button variant="info" className="fw-bold">Why Choose Us</Button>
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages">
                            <Button variant="info" className="fw-bold">Packages</Button>
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#tourtypes">
                            <Button variant="info" className="fw-bold">Tour Types</Button>
                        </Nav.Link>
                        {
                            user?.email ?
                            <>
                                <Nav.Link as={Link} to="/my-bookings">
                                    <Button variant="info" className="fw-bold">My Bookings</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/manage-all-bookings">
                                    <Button variant="info" className="fw-bold">Manage All Bookings</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/add-a-new-package">
                                    <Button variant="info" className="fw-bold">Add A New Package</Button>
                                </Nav.Link>
                            </>
                            :
                            <></>
                        }
                        <Navbar.Text>
                            {
                                user?.email ? 
                                <h6 className="mx-md-3">{user.displayName}</h6>
                                :
                                <></>
                            }
                            
                        </Navbar.Text>
                        {
                            user?.email ? 
                            <Button onClick={ logout } variant="warning" className="fw-bold">Log Out</Button>
                            :
                            <Nav.Link as={Link} to="/login"><Button variant="info" className="fw-bold">Log In</Button></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;