import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { GoogleAuthProvider } from 'firebase/auth';
import Footer from '../Share/Footer/Footer';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import Header from '../Share/Header/Header';

const SingUp = () => {
    const googleProvider = new GoogleAuthProvider();
    const { googleProviderLogin, createUser } = useContext(AuthContex);
    const googleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photoURL = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                from.reset();
            })
            .catch(error => console.error(error))
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
                                            <input type="password" placeholder='Enter Your Email' name="password" className="form-control" required />
                                        </div>
                                        <div className='ps-lg-5'>
                                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                                        </div>
                                        <p className='ps-lg-5 '>Have a Account? <a href="/login">Log In</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                Facebook
                            </button>

                            <button type="button" onClick={googleSingIn} className="btn btn-link btn-floating mx-1">
                                Google
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                Github
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