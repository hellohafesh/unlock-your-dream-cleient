import React from 'react';
import { Container } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <form className='d-flex justify-content-center align-items-center p-1 p-5'>
                <div className=' '>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input type="email" placeholder='Enter Your Email' name="email" className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input type="password" placeholder='Enter Your Email' name="password" className="form-control" />
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-block mb-4">Log in</button>
                    <p>Not a member? <a href="/singup">Register</a></p>

                </div>
            </form>
        </Container >
    );
};

export default Login;