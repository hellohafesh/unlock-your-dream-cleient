import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';

import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { singIn } = useContext(AuthContex);
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                from.reset();
                navigate('/')
            })
            .catch(error => console.error(error))
    }


    return (

        <div>
            <Header></Header>
            <Container>


                <form onSubmit={handleLogin} className='d-flex justify-content-center align-items-center  p-1 p-5'>

                    <div className='w-100 p-lg-5   pe-lg-5 '>
                        <div className='ps-lg-5  pe-lg-5 ps-md-5  pe-md-5 '>
                            <div className="ps-lg-5  pe-lg-5">
                                <div className="ps-lg-5  pe-lg-5">
                                    <h1 className='text-center'>Unlock Your Dream</h1>
                                    <p className='text-center'>For Your Better Future</p>
                                    <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                        <label className="form-label" for="form2Example1">Email address</label>
                                        <input type="email" placeholder='Enter Your Email' name="email" className="form-control" required />
                                    </div>
                                    <div className="form-outline mb-4 ps-lg-5 pe-lg-5 ">
                                        <label className="form-label" for="form2Example2">Password</label>
                                        <input type="password" placeholder='Enter Your Password' name="password" className="form-control" required />
                                    </div>
                                    <div className="row mb-4 ps-lg-5 ">
                                        <div className="col">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    <div className='ps-lg-5'>
                                        <button type="submit" className="btn btn-primary btn-block mb-4">Log in</button>
                                    </div>
                                    <p className='ps-lg-5 '>Not a member? <a href="/singup">Register</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container >
            <Footer></Footer>
        </div>
    );
};

export default Login;