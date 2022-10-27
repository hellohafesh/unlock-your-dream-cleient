import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-primary text-center text-white">
                <div className="container p-4">
                    <h3 className='text-center'>JOIN US</h3>
                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" target='blank' href="#!" role="button"
                        >
                            <FaFacebook /></a>
                        <a className="btn btn-outline-light btn-floating m-1" target='blank' href="#!" role="button"
                        ><FaTwitter /></a>

                        <a className="btn btn-outline-light btn-floating m-1" target='blank' href="#!" role="button"
                        >
                            <FaGoogle /></a>

                        <a className="btn btn-outline-light btn-floating m-1" target='blank' href="#!" role="button"
                        ><FaInstagramSquare /></a>

                        <a className="btn btn-outline-light btn-floating m-1" target='blank' href="#!" role="button"
                        ><FaLinkedin /></a>
                        <a className="btn btn-outline-light btn-floating m-1" target='blank' href="#!" role="button"
                        ><FaGithub /></a>
                    </section>
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="!#" className="btn btn-outline-light mb-4">
                                        send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <p>
                            We believe each of our students is a member of the UYF family. So any constructive comments from students motivate us to move forward to correct our mistakes. It is not too late to make a career decision. Enroll in any online or offline course at your convenience now.
                        </p>
                    </section>
                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="">Response</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> Meet With Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> Privacy Statement</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> Opinion</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="">Usefull Link</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> Newsletters</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> Location Map</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="">Branding</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> About Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white"> Blog</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white">
                                            Photo Gallery</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="">Get In Tuch</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white">Send your Feedback</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white">skill.jobs</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ textDecoration: "none" }} className="text-white">Covid-19 updates</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a className="text-white" style={{ textDecoration: "none" }} href="https://unlock-your-dreams.web.app/">UnlockYourDream.com</a>
                </div>
            </footer>
















        </div>
    );
};

export default Footer;