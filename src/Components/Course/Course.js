import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Course = (props) => {
    console.log(props.course);
    const { Img, title, Instructor, price, Enrolled, Lesson } = props.course;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
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

            {/* <h2>Title:{title}</h2>
            <h3>Instructor:{Instructor}</h3>
            <h4>price:{price}</h4>
            <h5>Enrolled:{Enrolled}</h5>
            <h5>Lesson:{Lesson}</h5> */}
        </div>
    );
};

export default Course;