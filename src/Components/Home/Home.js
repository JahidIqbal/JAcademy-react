import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import img from '../../Images/learn-english.jpg'
import img2 from '../../Images/exam.jpg'
import img3 from '../../Images/speak.jpg'
import Course from '../Course/Course';



const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <div className=" mx-auto w-50 mb-5">
            <h1 className=" fw-bolder">Welcome To our JAcademy</h1>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>You are worried about English?</h3>
                        <p>Well its easy!You just need to have faith</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Wan to Know learn more?</h3>
                        <p>We will help you to understand the topic.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Do you speak english?</h3>
                        <p>communication comes with co-operation.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mx-auto mt-5">
                <h2 className=" fw-bolder">Explore Our Online Courses</h2>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </div>
        </div>


    );
};

export default Home;