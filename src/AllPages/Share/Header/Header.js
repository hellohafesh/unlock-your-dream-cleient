import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const Header = () => {
    return (
        <div>
            <Navbar className='mb-4 p-3' bg="primary" variant="dark" expand="lg">
                <Container>
                    <Link className='p-2 text-bold text-dark' to='/'><h4>Unlock Your Dreams</h4></Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='p-2 text-bold text-dark' to='/'>Home</Link>
                            <Link className='p-2 text-bold text-dark' to='/courses/all'>Courses</Link>
                            <Link className='p-2 text-bold text-dark' to='/courses/premium'>Premium Acsess</Link>
                            <Link className='p-2 text-bold text-dark' to='/faq'>Faq</Link>
                            <Link className='p-2 text-bold text-dark' to='/blogs'>Blogs</Link>
                            <Link className='p-2 text-bold text-dark' to='/'>About</Link>

                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            {/* <Link to='/courses/all'>HOME</Link> */}
                            {/* <Nav.Link href="/courses/all">Courses</Nav.Link> */}
                            {/* <Nav.Link href="/courses/premium">Premium Acsess</Nav.Link>
                            <Nav.Link href="/faq">Faq</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link> */}
                            <div className='d-md-none d-lg-none'>
                                <SideNav></SideNav>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;