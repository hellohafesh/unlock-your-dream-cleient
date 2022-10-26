import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://unlock-your-dreams-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);

    return (
        <div>
            <h1 className='mb-4 ms-5'>All Courses {courses.length}</h1>
            <div className='d-flex flex-wrap justify-content-around' >
                {
                    courses.map(course => <div key={course.id}>
                        <Card style={{ marginBottom: "30px", width: '280px', height: '350px' }}>
                            <Card.Img style={{ width: '280px', height: '130px' }} variant="top" src={course.image_url} />
                            <Card.Body>
                                <Card.Title>{course.course_name}</Card.Title>
                                <Card.Text>
                                    {course.details.slice(0, 95)}...
                                </Card.Text>

                                <Button variant="primary"> <Link to={`/courses/course/${course.id}`} className='text-white' >See More About Course</Link></Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;