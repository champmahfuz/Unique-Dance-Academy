import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Services = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])
    return (
        <div className="w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-5 my-3 g-4">


            {
                course.map(courses => <Card className="mx-3">
                    <Card.Img variant="top" src={courses.image} />
                    <Card.Body>
                        <Card.Title>Course Name: {courses.name}</Card.Title>
                        <h5>Course Price: {courses.courseFee}</h5>
                        <h5>Course Duration: {courses.duration}</h5>
                        <h5>Course Teacher: {courses.courseTeacher}</h5>
                        <Button variant="primary" href="/services">Learn More</Button>
                    </Card.Body>

                </Card>
                )
            }


        </div >
    );
};

export default Services;