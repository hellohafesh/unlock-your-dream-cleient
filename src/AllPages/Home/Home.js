import React from 'react';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';

import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <header>
                    <section className="container ">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className=" carousel-inner ">
                                <div className="carousel-item active">
                                    <Image src="https://scontent.xx.fbcdn.net/v/t1.15752-9/308118671_424302286543868_4819413455296922861_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeE18kK8Og2tnsa9gYKzEpW9YsYLUR2vi0JixgtRHa-LQis6dW06QGJORFQXERLfWNZrO_WvifzBxvfHORRCEaSz&_nc_ohc=UxwxqFZ2jMcAX8bQ62R&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS6ItxbaYedBQD8IQ1ZIf61iH8oULcah_w4AwD3805ZwQ&oe=6381435F" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption text-center d-none m-sm-0 mb-sm-0 m-lg-5 mb-lg-5   d-md-block">
                                        <h1 className="fw-bold">Let the career begin
                                            Confidence <br /> in skills</h1>
                                        <p>One of the country's ISO certified IT
                                            Training institutes UYD IT institutes with experienced mentors and updated
                                            curriculum are ready for your career
                                            advancement. Choose your favorite course today from our more than 30 trendy courses.</p>
                                        <Link className="btn btn-primary fw-bold btn-lg" to='/'> Premium Access</Link>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                </header>
                <br />
                <br />
                <main className="container mt-5">
                    <section className=" mt-5">
                        <div className="text-center">
                            <h1 className="font-weight-bolder"> Teaching through practical projects is our speciality</h1>
                            <p>
                                Any education is incomplete without practical projects. According to a survey, 67 percent of people suffer in their working life due to lack of hands-on education alone. Moreover, without a portfolio in the marketplace or local jobs, it takes a lot of time to get a job. More or less everyone suffers from this problem at the beginning of all careers. So Creative IT believes in hands-on learning. That is why we have enough number of projects in each course. If you complete all the projects under the supervision of our skilled mentors, you can build a good portfolio during the course itself.
                            </p>
                        </div>
                    </section>
                    <br />
                    <br />
                    <section>
                        <div className="card mt-5 mb-3 support-bg" style={{ width: "100%" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image className="h-100 w-100  image-fluid rounded-start" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/310239759_534811681820594_2705794266899844724_n.png?stp=dst-png_p235x165&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHXPqq4p9GCCxSrINCkY_KZWv3xpqWyf9Ra_fGmpbJ_1DhJeEkySXN5YzXC0v_IlVrmB-FTjTjWvBYB3rW0sY1_&_nc_ohc=b5fvJwHpcIsAX8TYOIG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRP6bxYTn49csfEwlPJP6hkaw63VxCa089vrDEZtlyCwg&oe=638105F5" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 className="card-title">Lifetime Support and Career Placement Support</h1>
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
                                                <h1>
                                                    1k+
                                                </h1>
                                                <p>Expert Members</p>
                                            </div>
                                            <div className="">
                                                <h1>
                                                    22K+
                                                </h1>
                                                <p> Students</p>
                                            </div>
                                            <div className="">
                                                <h1>
                                                    24/7
                                                </h1>
                                                <p>Online Support</p>
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
                    <section className='mt-4'>
                        <div className="mt-5">
                            <div className=" d-lg-flex d-md-flex bg-primary rounded pt-5 mt-5 p-5 mb-5">
                                <div className=" mt-5 ">
                                    <div className=" col-md-8 col-lg-8 col-12 text-white">
                                        <h1> Participate in free seminars </h1>
                                        <p>Can't decide which course to take for freelancing? Join our free seminar. In these subject
                                            wise
                                            seminars you will know
                                            about the possibilities of each course. Moreover, by talking to the expert counselor present
                                            in
                                            the seminar, you can
                                            easily decide to choose the appropriate course.</p>
                                    </div>
                                </div>
                                <div className="col-4  ps-5 pt-5 ms-5 ">
                                    <button type="button" className="btn btn-light btn-lg  text-primary fw-bold" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        Join Now
                                    </button>

                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="mb-3">
                                                            <h2> Join With Google Meet</h2>
                                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                                aria-describedby="emailHelp" />
                                                            <div id="emailHelp" className="form-text">We'll never share your email with
                                                                anyone else.</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                                        </div>
                                                        <div className="mb-3 form-check">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                                        </div>
                                                    </form>

                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Join</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <br />
                        <br />
                    </section>
                </main>
                <div className='text-center p-5 mt-5 mb-5'>
                    <h1>Admission is ongoing for all courses</h1>
                    <p className='m-5'>UYD is at your side to keep yourself updated with modern technology. Be it IT sector or non-IT sector, IT experts are now in good demand everywhere. That is why we have been creating IT experts for 10 years with updated curriculum, experienced mentors and modern labs. As a result of this, we have found more than 50 thousand successful faces, who have become self-reliant and created employment for more people. And the success of these students is the inspiration for our journey. We believe that every human being is talented, and it is our responsibility to develop your talent. All that is required is your interest and regular practice.</p>
                </div>
                <div className="text-center pb-5">
                    <h1>Why You Choose Us</h1>
                </div>
                <div className=" gap-5 d-flex flex-wrap justify-content-around">

                    <Card style={{ marginBottom: "30px", width: '300px', height: '400px' }}>
                        <Card.Img style={{ width: '300px', height: '130px' }} variant="top" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/310816590_1268870330621610_5659463847434224897_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeEAW7bh6N1RzjgK2TKQRMZVGBR6ZEXLZp4YFHpkRctmnhYJUw3GH6soXYBI3xYVkNloztzB_lQD6Gfc-S1DBJCn&_nc_ohc=v249Pjtz7e0AX-RPf92&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQmSsBWp80XZkLURcA2I7tLgi3iB8dmZ5rQ23BZVkQE-g&oe=63805EB7" />
                        <Card.Body>
                            <Card.Title><h3>Life Time Support</h3></Card.Title>
                            <Card.Text>
                                Even though the training is over, the relationship with you does not end here. As a Creative IT student you get life-time support. 24/7 online support anytime. Our subject wise experienced team ensures this support offline or online.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: "30px", width: '300px', height: '400px' }}>
                        <Card.Img style={{ width: '300px', height: '130px' }} variant="top" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/307855580_3381016262171377_2455664641742057758_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeGCPHOV2NIOS5GinR1EXlyADzxjoZy4lO4PPGOhnLiU7p5vXxG2IbAbMYRvSXagK0LijumM6tdmQlqBAdXQx58g&_nc_ohc=Qs89OhPO0lAAX_wwqr1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSsLvEH-81pjWQu5aOpGSMuPtCnMFpBCgMPHrQ6LbEtpA&oe=637F3EB6" />
                        <Card.Body>
                            <Card.Title><h3>Career placement support</h3></Card.Title>
                            <Card.Text>
                                The Career Placement Department works to get the CV to the right place according to the students' qualifications. From here you will get various seminars on post-course  and career guidelines. Which will put you far ahead of in your career race.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: "30px", width: '300px', height: '400px' }}>
                        <Card.Img style={{ width: '300px', height: '130px' }} variant="top" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/309584257_1123757101613151_4035890955912838523_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeF-HHJTHPLOwsgOMg9To9Oe6e3AH-kmG43p7cAf6SYbjRWE88Oba3f8AgFKAG6CCpPyKuMhrw-65jNWxPEKEQrn&_nc_ohc=0VbQtN46DZ0AX97fTyS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSo_19EYRjJTwWqoxwrVeoshgHzt_x7XG9-K5Bq9kWD4w&oe=637F507F" />
                        <Card.Body>
                            <Card.Title><h3>Vedio Classes</h3></Card.Title>
                            <Card.Text>
                                Many times students do not understand some topics in the class, for them there is the advantage of class videos. So now the students can take the class safely. You can solve any problem yourself by watching the video in any difficulty.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default Home;