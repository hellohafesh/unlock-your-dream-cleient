import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { FaGoogle, FaGithub } from 'react-icons/fa';



const Login = () => {
    const [error, setError] = useState('');
    const { singIn, setLoading, githubProviderLogin, googleProviderLogin } = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const githubSingIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
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
                                        <input type="email" placeholder='Enter Your Email' name="email" className="form-control" />
                                    </div>
                                    <div className="form-outline mb-4 ps-lg-5 pe-lg-5 ">
                                        <label className="form-label" for="form2Example2">Password</label>
                                        <input type="password" placeholder='Enter Your Password' name="password" className="form-control" required />
                                    </div>
                                    <p className=' mb-4 ps-lg-5 text-danger'>{error}</p>
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
                            <div className="text-center">
                                <h5><b>Continue with:</b></h5>
                                <button type="button" onClick={googleSingIn} className="btn btn-primary btn-outline-light btn-floating m-2">
                                    <FaGoogle style={{ height: "40px", width: "40px" }} />
                                </button>

                                <button type="button" onClick={githubSingIn} className="btn btn-primary btn-outline-light btn-floating m-2">
                                    <FaGithub style={{ height: "40px", width: "40px" }} />
                                </button>
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