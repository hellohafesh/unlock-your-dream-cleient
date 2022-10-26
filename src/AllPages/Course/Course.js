import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1> Course Details of :{course.course_name}</h1>

            <p>Lecture :{course.lecture}</p>
            <p>Duration :{course.duration}</p>
            <p>{course.details}</p>
            <Link to="/courses/premium"> Try prmium</Link>
        </div>
    );
};

export default Course;