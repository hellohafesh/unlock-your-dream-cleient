import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../AllPages/Share/Footer/Footer';
import Header from '../AllPages/Share/Header/Header';
import SideNav from '../AllPages/Share/SideNav/SideNav';
import Card from 'react-bootstrap/Card';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block d-md-block' >
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="10">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
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
            <Footer></Footer>
        </div>
    );
};

export default Main;