import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img from '../../Images/quiz.jpg'
import img2 from '../../Images/photography.jpg'
import img3 from '../../Images/Games.jpg'

const Events = () => {
    return (
        <div className="mb-4">
            <p className="h1 fw-bold ">Latest Events of JAcademy</p>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Quiz Competition</Card.Title>
                        <Card.Text>
                            JAcedemy College Quizzing Society (JCQS) is proud to announce its “1st General Knowledge Quiz Competition” where you, the brilliant minds of our country, will compete against each other with such intensity that it will make you say like Tai Lung from Kung Fu Panda, “Finally! A Worthy Opponent! Our battle will be legendary!”
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>photography Competition</Card.Title>
                        <Card.Text>
                            Free to enter and open to anyone submitting single images taken in 2021
                            Ten diverse categories to enter
                            Awards for category winners plus up to 15 shortlisted photographers per category
                            One overall winner receives the Open Photographer of the Year title.
                            Deadline is  November, 2022 at 13.00 GMT
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Virtual Gaming Competition</Card.Title>
                        <Card.Text>
                            Nothing brings gamers together like a bit of competition. Whether its World of Warcraft or the latest release of Mario Kart, these games engender amazing amounts of community and togetherness. The esports craze has inspired some of the most heated competitions the world has ever seen, and it's only getting bigger.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Events;