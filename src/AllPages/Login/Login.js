import React from 'react';
import { Container } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <form className='d-flex justify-content-center align-items-center p-1 p-5'>
                <div className=' '>

                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" for="form2Example2">Password</label>
                    </div>

                    <div className="row mb-4">

                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Log in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            Facebook
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            Google
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            Github
                        </button>
                    </div></div>
            </form>
        </Container >
    );
};

export default Login;