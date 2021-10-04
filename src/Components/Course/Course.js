import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Course = (props) => {
    const { Img, title, Instructor, price, Enrolled, Lesson } = props.course;
    return (
        <div>

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

        </div>
    );
};

export default Course;