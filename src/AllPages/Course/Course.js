import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1> Course Details of :{course.course_name}</h1>

            <p>Lecture :{course.lecture}</p>
            <p>Duration :{course.duration}</p>
            <p>{course.details}</p>
        </div>
    );
};

export default Course;