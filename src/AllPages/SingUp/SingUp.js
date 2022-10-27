import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import Footer from '../Share/Footer/Footer';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import Header from '../Share/Header/Header';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SingUp = () => {
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { googleProviderLogin, githubProviderLogin, createUser, updateUserProfile } = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
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
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();
                handleUserProfile(name, photoURL);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message)
            })
    }
    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error));
    }
    const handleAcept = event => {
        setAccept(event.target.checked)
    }






    return (
        <div>
            <Header></Header>
            <Container>
                <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center pb-0 mb-5 p-2'>
                    <div className=' w-100 pb-0 '>
                        <div className='w-100 pb-lg-0 p-lg-5   pe-lg-5 '>
                            <div className='ps-lg-5  pe-lg-5 ps-md-5  pe-md-5 '>
                                <div className="ps-lg-5  pe-lg-5">
                                    <div className="ps-lg-5  pe-lg-5">
                                        <h1 className='text-center'>Unlock Your Dream</h1>
                                        <p className='text-center'>For Your Better Future</p>
                                        <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                            <label className="form-label" for="form2Example1"> Your Name</label>
                                            <input type="text" placeholder='Enter Your Name' name="name" className="form-control" required />
                                        </div>
                                        <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                            <label className="form-label" for="form2Example1">Photo URL</label>
                                            <input type="text" placeholder='Enter Your Photo URL' name="photoURL" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                            <label className="form-label" for="form2Example1">Email address</label>
                                            <input type="email" placeholder='Enter Your Email' name="email" className="form-control" required />
                                        </div>
                                        <div className="form-outline mb-4 ps-lg-5 pe-lg-5 ">
                                            <label className="form-label" for="form2Example2">Password</label>
                                            <input type="password" placeholder='Enter Your Password' name="password" className="form-control" required />
                                        </div>
                                        <p className=' mb-4 ps-lg-5 text-danger'>{error}</p>
                                        <div className="mb-2 ps-lg-5 ">
                                            <input
                                                type="checkbox"
                                                id="disabledFieldsetCheck"
                                                onClick={handleAcept}
                                            />
                                            <label className='ms-2' for="">Accepts Our <Link to="/">Terms And Condition</Link> </label>
                                        </div>

                                        <div className='ps-lg-5'>
                                            <button type="submit" className="btn btn-primary btn-block mb-4" disabled={!accept}>Sign in</button>
                                        </div>
                                        <p className='ps-lg-5 '>Have a Account? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h5><b>or sign up with:</b></h5>
                            <button type="button" onClick={googleSingIn} className="btn btn-primary btn-outline-light btn-floating m-2">
                                <FaGoogle style={{ height: "40px", width: "40px" }} />
                            </button>

                            <button type="button" onClick={githubSingIn} className="btn btn-primary btn-outline-light btn-floating m-2">
                                <FaGithub style={{ height: "40px", width: "40px" }} />
                            </button>
                        </div>
                    </div>
                </form>
            </Container >
            <Footer></Footer>
        </div>
    );
};

export default SingUp;