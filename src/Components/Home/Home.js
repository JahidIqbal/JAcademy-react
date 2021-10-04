import React from 'react';
import { Carousel, Container, Navbar } from 'react-bootstrap';
import img from '../../Images/learn-english.jpg'
import img2 from '../../Images/exam.jpg'
import img3 from '../../Images/speak.jpg'
import { Link } from 'react-router-dom';



const Home = () => {
    return (

        <div className=" mx-auto w-50 mb-5">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>You are worried about English?</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;