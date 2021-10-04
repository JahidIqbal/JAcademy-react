import React from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const Program = (props) => {
    const { Img, title, Instructor, price, Enrolled, Lesson } = props.program;
    return (
        <div>
            <Container fluid="md">
                <Card >
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <Card.Title>Title:{title}</Card.Title>
                        <Card.Text>Instructor:{Instructor}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>price:${price}</ListGroupItem>
                        <ListGroupItem>Enrolled:{Enrolled}</ListGroupItem>
                        <ListGroupItem>Lesson:{Lesson}</ListGroupItem>
                    </ListGroup>

                </Card>
            </Container>
        </div>


    );
};

export default Program;