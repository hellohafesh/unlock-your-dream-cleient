import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import DarkModeToggle from "react-dark-mode-toggle";
import { useContext } from 'react';
import { AuthContex } from '../../../contex/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Image } from 'react-bootstrap';




const Header = () => {
    const { user, logout } = useContext(AuthContex);
    const logouthbutton = () => [
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    ]
    const [isDarkMode, setIsDarkMode] = useState(() => false);
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
                            <p>
                                {user?.uid ? <>



                                    <Link className='ms-3' to='/'>
                                        {
                                            user?.photoURL ? <Image style={{ height: '40px', width: '40px', borderRadius: '50px' }} src={user?.photoURL}></Image> : <FaUserCircle />
                                        }
                                    </Link>
                                    <Link onClick={logouthbutton} className='ms-3' to='/'>Log Out</Link>
                                </>
                                    :
                                    <><FaUserCircle />
                                        <Link className='ms-3' to='/login'>Log IN</Link>
                                    </>
                                }
                            </p>

                        </Navbar.Text>
                        <div className='ms-3'>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={50}
                            />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};


export default Header;