import React from 'react';
import { Container, Nav , Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/">Home</Nav.Link>
                        
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as = {Link} to="/manageItems">Manage Items</Nav.Link>
                        <Nav.Link as = {Link} to = "/addItems">Add Items</Nav.Link>
                        <Nav.Link as = {Link} to = "/myItems">My Items</Nav.Link>
                        <Nav.Link as = {Link} to = "/logIns">Log Out</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default GetNavbar;