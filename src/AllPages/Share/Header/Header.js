import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import DarkModeToggle from "react-dark-mode-toggle";
import { useContext } from 'react';
import { AuthContex } from '../../../contex/AuthProvider/AuthProvider';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from 'react-bootstrap';
import './Header.css';




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
            <Navbar className='mb-4 ' bg="primary" variant="dark" expand="lg">
                <Container>
                    <div className="">
                        <Image style={{ width: '180px', height: '65px', borderRadius: '15px' }} src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.15752-9/307885908_419068553564567_3845618597107844735_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHBe_iIo-WD9s9v4HWe6m0fdsjyDiEW_aJ2yPIOIRb9oqYatXDBAtlc-Px7HOlVfsLIPnAKfGCjdvrYolkbGEo0&_nc_ohc=dbB2-oSn6fYAX_P9rwc&_nc_ht=scontent.fdac24-2.fna&oh=03_AdQ6Tx0zKNIJ-56Ee-z9419oVMg8h6AApttqQSheAhSXFQ&oe=63804411" alt="" />
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className=' ms-5 text-bold text-dark btn btn-outline-light btn-floating m-2' to='/'>Home</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/courses/all'>Courses</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/courses/premium'>Premium </Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/blogs'>Blogs</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/faq'>Faq</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/'>About</Link>
                            <div className='d-md-none d-lg-none'>
                                <SideNav></SideNav>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <p>
                                {user?.uid ? <>



                                    <Link className='ms-3' to='/profile'>
                                        {
                                            user?.photoURL ? <Image title={user?.displayName} style={{ height: '40px', width: '40px', borderRadius: '50px' }} src={user?.photoURL}></Image> : <FontAwesomeIcon style={{ height: '40px', width: '40px', borderRadius: '50px' }} icon={faCircleUser} />
                                        }
                                    </Link>
                                    <Link onClick={logouthbutton} className='ms-3 mb-4 p-2 text-bold text-dark btn btn-outline-light btn-floating m-1' to='/'>Log Out</Link>
                                </>
                                    :
                                    <>
                                        <FontAwesomeIcon style={{ height: '40px', width: '40px', borderRadius: '50px' }} icon={faCircleUser} />
                                        <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                                        <Link className='ms-3 mb-4 p-2 text-bold text-dark  btn btn-outline-light btn-floating m-1' to='/login'>Login</Link>
                                    </>
                                }
                            </p>

                        </Navbar.Text>
                        <div className="tooltip">
                            <Image className="size_of_img" style={{ height: '40px', width: '40px', borderRadius: '50px' }} src={user?.photoURL} alt="Image 1" />
                            <span class="tooltiptext">grewon.pdf</span>
                        </div>
                        <div className='ms-3 mb-4'>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={50}
                            />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};


export default Header;