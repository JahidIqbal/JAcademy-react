import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="mb-5">

            {/* Heading part */}

            <div className="bg-light">
                <p className="h1 fw-bold ">JAcademy</p>
                <p className="h4 fst-italic">Making you Proud is our vision</p>
            </div>


            {/* Navbar part */}

            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="">JAcademy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/courses"}>Courses</Nav.Link>
                            <Nav.Link as={Link} to={"/events"}>Events </Nav.Link>



                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;