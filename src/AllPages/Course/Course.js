import { React, useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Course.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBIcon, MDBRipple } from "mdb-react-ui-kit";
import { Button, Image } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';


const Course = () => {
    const ref = useRef();
    const course = useLoaderData();
    console.log(course);
    return (

        <div>
            <div>
                <ReactToPrint trigger={() => <Button className='mt-4'>Print Details</Button>} content={() => ref.current} />
                <div ref={ref} className="a">

                    <h1 className='text-center '> Course Details of :{course.course_name}</h1>
                    <div className="">

                        <MDBContainer fluid>
                            <MDBRow className="justify-content-center mb-0">
                                <MDBCol md="12" xl="10">
                                    <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                                    <MDBRipple
                                                        rippleColor="light"
                                                        rippleTag="div"
                                                        className="bg-image rounded hover-zoom hover-overlay"
                                                    >
                                                        <MDBCardImage
                                                            src={course.image_url3}
                                                            fluid
                                                            className="w-100"
                                                        />
                                                        <a href="#!">
                                                            <div
                                                                className="mask"
                                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                            ></div>
                                                        </a>
                                                    </MDBRipple>
                                                </MDBCol>
                                                <MDBCol md="6">
                                                    <h5>{course.course_name} </h5>
                                                    <div className="d-flex flex-row">
                                                        <div className="text-danger mb-1 me-2">
                                                            <MDBIcon fas icon="star" />
                                                            <MDBIcon fas icon="star" />
                                                            <MDBIcon fas icon="star" />
                                                            <MDBIcon fas icon="star" />
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li>Duration :{course.duration}</li>
                                                        <li>Lecture :{course.lecture}</li>
                                                        <li>Live Projects :{course.projects}</li>
                                                    </ul>

                                                </MDBCol>
                                                <MDBCol
                                                    md="6"
                                                    lg="3"
                                                    className="border-sm-start-none border-start"
                                                >
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <h4 className="mb-1 me-1"> <small>Offline : </small> ${course.course_fee
                                                        }</h4>
                                                        <span className="text-danger">
                                                            <s>${course.course_feeo}</s>
                                                        </span>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <h4 className="mb-1 me-1"><small>Online : </small>${course.course_fee_online}</h4>
                                                        <span className="text-danger">
                                                            <s>${course.course_fee_onlineo}</s>
                                                        </span>
                                                    </div>
                                                    <div className="d-flex flex-column mt-4">
                                                        <Button>
                                                            <Link className="text-dark btn-primary" style={{ textDecoration: "none" }} to={`/courses/premium/${course.id}`}> Try Premium </Link>

                                                        </Button>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <div className="p-5">

                        <div className="p-5 ">
                            <Card>

                                <Card.Img variant="top" src={course.image_url2} />

                                <Card.Body>
                                    <Card.Text>
                                        <b>
                                            {course.details}
                                        </b>
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </div>


                    </div>
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
                                    <Image className="h-100 w-100  image-fluid rounded-start" src={course.image_url} alt="..." />
                                </div>

                            </div>
                        </div>




                        <br />
                        <br />
                        <br />
                    </section>
                    <div className="">
                        <h1 className='text-center'>More Some thing You Have to Know</h1>
                        <h6>
                            {course.course_overview}
                        </h6>
                    </div>
                    <br />

                </div>

            </div>


            <br />
        </div>




    );
};

export default Course;