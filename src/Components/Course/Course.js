import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Course = (props) => {
    const { Img, title, Instructor, price, Enrolled, Lesson } = props.course;
    return (
        <div>

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

        </div>
    );
};

export default Course;