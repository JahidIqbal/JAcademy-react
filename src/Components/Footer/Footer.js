import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Form, FormControl } from 'react-bootstrap';




const Footer = () => {
    return (
        <div>
            <Card className="w-75 mx-auto bg-dark text-white">
                <Card.Header>JAcademy</Card.Header>
                <Card.Body>
                    <Card.Title>New Courses coming soon!!</Card.Title>
                    <Card.Text>
                        Keep an eye on our website for special discount for upcoming courses.
                    </Card.Text>
                    <Form className="d-flex mx-auto w-75">
                        <FormControl
                            type="search"
                            placeholder="Just Enter Your Email-Address to know more details"
                            className=" mx-auto"
                            aria-label="Search"

                        />
                        <Button className="bg-dark text-white border radius rounded-top w-25" variant="outline-dark dark">Send</Button>
                    </Form>

                </Card.Body>
            </Card>
        </div>


    );
};

export default Footer;