import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Courses from '../AllPages/Courses/Courses';
import Footer from '../AllPages/Share/Footer/Footer';
import Header from '../AllPages/Share/Header/Header';
import SideNav from '../AllPages/Share/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4">
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;