import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
const Home = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourse(data.slice(0, 4)));
    }, [])
    return (
        <div className="w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-5 my-3 g-4">


            {
                course.map(courses => <Card className="mx-3">
                    <Card.Img variant="top" src={courses.image} />
                    <Card.Body>
                        <Card.Title>Course Name: {courses.name}</Card.Title>
                        <h3>Course Price:{courses.courseFee}</h3>
                        <h4>Course Duration: {courses.duration}</h4>
                        <h4>Course Teacher: {courses.courseTeacher}</h4>
                        <Button variant="primary" href="/services">Learn More</Button>
                    </Card.Body>

                </Card>
                )
            }


        </div >
    );
};

export default Home;