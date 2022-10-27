import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';

const Faq = () => {
    return (
        <div>
            <Header></Header>
            <Container>


                <section>
                    <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
                    <p class="text-center mb-5">
                        Find the answers for the most frequently asked questions below
                    </p>

                    <div class="row">
                        <div class="col-md-6 col-lg-4 mb-4">
                            <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i> React Delcreative
                                ?</h6>
                            <p>
                                <strong><u>Absolutely!</u></strong> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                            </p>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i>Is It Component Base?</h6>
                            <p>
                                <strong><u>Yes, it is !</u></strong> Build encapsulated components that manage their own state, then compose them to make complex UIs.
                            </p>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i> Why We learn Resct?
                            </h6>
                            <p>
                                People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.




                            </p>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> About Web Applications?
                            </h6>
                            <p>
                                Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                            </p>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> Tell About Node Api ?
                            </h6>
                            <p><strong><u> With a myriad</u>.</strong> of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy..</p>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i>Express Js Performance .?</h6>
                            <p>
                                Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Faq;