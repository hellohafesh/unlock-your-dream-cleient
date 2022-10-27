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
            <Navbar className='mb-0 ' bg="primary" variant="dark" expand="lg">
                <Container>
                    <Link to='/'>
                        <div className="d-flex">
                            <div className="">
                                <Image style={{ width: '180px', height: '110px', borderRadius: '15px' }} src="https://scontent.xx.fbcdn.net/v/t1.15752-9/308131439_8151304491610783_5130003209430739569_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHI5Oj8L0NlB68GM4NB764RCgyIUtGGBkYKDIhS0YYGRr5_8315m8Wlqzm2EuC69qvv_fYEVsDnUUVK1NnphF6K&_nc_ohc=eWjdYN7KW8QAX9Q_Gik&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQA8HgRQQLE4sQ3kVSalBivQdXWjps5YxzirvLt707row&oe=637EED90" alt="" />
                            </div>
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className=' ms-5 text-bold text-dark btn btn-outline-light btn-floating m-2' to='/'>Home</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/courses/all'>Courses</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/blogs'>Blogs</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/faq'>FAQ</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/'>About</Link>
                            <Link className=' text-bold text-dark btn btn-outline-light btn-floating m-2' to='/courses/premium'>404 </Link>
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