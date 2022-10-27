import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://unlock-your-dreams-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='p-3 mt-3 rounded mb-2 bg-primary text-white'>
            <h4>All Courses {courses.length}</h4>
            <div className='p-3'>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/courses/course/${course.id}`} style={{ textDecoration: "none" }} className='w-100 p-2 text-bold text-dark  btn btn-outline-light btn-floating m-1' >{course.course_name}</Link>
                    </p>)

                }
            </div>
        </div>
    );
};

export default SideNav;