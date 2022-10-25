import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='p-3 mb-2 bg-primary text-white'>
            <h4>All Courses {courses.length}</h4>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/courses/course/${course.id}`} className='text-white' >{course.course_name}</Link>
                    </p>)

                }
            </div>
        </div>
    );
};

export default SideNav;