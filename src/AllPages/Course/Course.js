import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Course.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBIcon, MDBRipple } from "mdb-react-ui-kit";
import { Button } from 'react-bootstrap';

const Course = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
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




            <p>{course.course_overview}</p>
            <p>{course.course_overview2}</p>

            <br />
            <Link to="/courses/premium"> Try prmium</Link>










        </div >
    );
};

export default Course;