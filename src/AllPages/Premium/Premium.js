import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';

const Premium = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div>
            <div className="text-center p-3 mt-5">
                <h4 >Wellcome To Premium Version </h4>
                <h2 className='text-primary mt-5'>Build Your Career In : {course.course_name}</h2>
            </div>
            <section>


                <div className="card mt-5 mb-3 support-bg" style={{ width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Image className="h-100 w-100  image-fluid rounded-start" src={course.image_url3} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">What Have In Our Course ?</h1>
                                <p className="card-text">Even though the training is over, the relationship with you is not
                                    over. As an IT student
                                    you get life time support.
                                    24/7 online support anytime. Our subject wise experienced team ensures this support
                                    offline
                                    or online.
                                    <br />
                                    <br />
                                    The job placement department works to get the CV to the right place according to the
                                    students' qualifications.
                                </p>
                                <div className="d-flex justify-content-around">
                                    <div className="">
                                        <h5>
                                            {course.duration}
                                        </h5>
                                        <p><small>Duration</small> </p>
                                    </div>
                                    <div className="">
                                        <h4>
                                            {course.lecture}
                                        </h4>
                                        <p><small> Lecture</small></p>
                                    </div>
                                    <div className="">
                                        <h4>
                                            {course.projects}
                                        </h4>
                                        <p><small>Live Projects</small> </p>
                                    </div>

                                </div>
                                <div className="">
                                    <button className="btn btn-outline-primary mb-5 ms-2 mt-5  fw-bold " type="submit">Read
                                        More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <br />
                <br />
                <br />
            </section>
            <section>
                <div className=" d-lg-flex d-md-flex bg-primary rounded pt-5  p-5 mb-5">
                    <div className=" col-md-8 col-lg-8 col-12 text-white">
                        <h1> Participate in free Vedios </h1>
                        <p>Can't decide which course to take for freelancing? Join our free seminar. In these subject
                            wise
                            seminars you will know
                            about the possibilities of each course. Moreover, by talking to the expert counselor present
                            in
                            the seminar, you can
                            easily decide to choose the appropriate course.</p>
                    </div>
                    <div className="col-4  ps-5 pt-5 ms-5 ">
                        <button type="button" className="btn btn-light btn-lg  text-primary fw-bold" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            Join Now
                        </button>

                    </div>
                </div>
            </section>


            <section>


                <div className="card mt-5 mb-3 support-bg" style={{ width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">More About This Course </h1>
                                <p className="card-text mt-5">
                                    <b>
                                        {course.course_overview2}
                                    </b>
                                </p>

                                <div className="">
                                    <button className="btn btn-outline-primary mb-5 ms-2 mt-5  fw-bold " type="submit">Read
                                        Continue Course
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Image className="h-100 w-100  image-fluid rounded-start" src={course.image_url3} alt="..." />
                        </div>

                    </div>
                </div>




                <br />
                <br />
                <br />
            </section>
        </div>
    );
};

export default Premium;