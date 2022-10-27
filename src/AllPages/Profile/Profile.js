import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';

const Profile = () => {
    const { updateUserProfile } = useContext(AuthContex);
    const { user } = useContext(AuthContex);
    const photoURLRef = useRef(user?.photoURL);
    const nameRef = useRef(user?.displayName);
    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const photoURL = photoURLRef.current.value;

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>WELLCOME to your Profile</h1>
            <Container>
                <Row>
                    <Col lg="8" sm="12" >
                        <Container>
                            <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center pb-0 mb-5 p-2'>
                                <div className=' w-100 pb-0 '>
                                    <div className='w-100 pb-lg-0 p-lg-5   pe-lg-5 '>
                                        <div className='ps-lg-5  pe-lg-5 ps-md-5  pe-md-5 '>
                                            <h1 className='text-center'>Edit Your Profile</h1>
                                            <p className='text-center'>For Your Better Future</p>
                                            <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                                <label className="form-label" for="form2Example1">Email address</label>
                                                <input type="email" readOnly defaultValue={user?.email} name="email" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                                <label className="form-label" for="form2Example1"> Your Name</label>
                                                <input type="text" ref={nameRef} defaultValue={user?.displayName} name="name" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                                <label className="form-label" for="form2Example1">Photo URL</label>
                                                <input type="text" ref={photoURLRef} defaultValue={user?.photoURL} name="photoURL" className="form-control" />
                                            </div>

                                            <div className='ps-lg-5'>
                                                <button type="submit" className="btn btn-primary btn-block mb-4" >Upate Your Profile</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Container >
                    </Col>
                    <Col lg="4" className='bg-primary ' sm="12">
                        <h1 className='text-center'>Your Profile</h1>
                        <div className="text-center">
                            <Image style={{ height: "200px", width: "200px" }} src={user?.photoURL} alt='' />
                            <h4 className='p-2 mt-4'>Profile Name :{user?.displayName}</h4>
                            <h5 className='p-2'>Email:{user?.email}</h5>
                            <p className='p-2'>Photo URL:<small><Button target='blank' href={user?.photoURL}>Click For See Big</Button></small></p>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default Profile;