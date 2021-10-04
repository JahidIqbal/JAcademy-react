import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../Images/about.jpg'

const About = () => {
    return (
        <div>
            <Card className="bg-dark text-white mx-auto w-75 mb-5">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <h1 className=" fw-bolder">About JAcademy</h1>
                    <Card.Text>
                        JAcademy offer you the best course you are searching for!
                        This six-week course is interactive, with discussion boards, interactive lectures and activities, individual and group reflections, and projects related to day-to-day teaching practices. Activities and projects are tied to participants' actual roles and teaching environments wherever possible. This course is appropriate for all US-based and international educators interested in the intersection of English language teaching and supporting learners with exceptional needs, especially English language educators teaching English as a second or additional language, as a foreign language, and as an international language. It is also appropriate for special educators, general educators, coaches, and building-level or system-level administrators and school leaders.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>


        </div>
    );
};

export default About;