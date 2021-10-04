import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Program from '../Program/Program';

const Courses = () => {
    const [programs, setPrograms] = useState([])
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])

    return (
        <div>
            <p className="h1 fw-bold ">More Online Courses For Y'all</p>
            <Row xs={1} md={2} className="g-4">
                {
                    programs.map(program => <Program program={program}></Program>)
                }

            </Row>
        </div>
    );
};

export default Courses;