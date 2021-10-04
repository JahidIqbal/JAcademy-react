import React from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const Program = (props) => {
    const { Img, title, Instructor, price, Enrolled, Lesson } = props.program;
    return (
        <div className="mb-4">
            <Container fluid="md">
                <Card >
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <Card.Title className="h2">{title}</Card.Title>
                        <Card.Text className="h5">Instructor:{Instructor}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="h5">price:${price}</ListGroupItem>
                        <ListGroupItem className="h5">Enrolled:{Enrolled}</ListGroupItem>
                        <ListGroupItem className="h5">Lesson:{Lesson}</ListGroupItem>
                    </ListGroup>

                </Card>
            </Container>
        </div>


    );
};

export default Program;