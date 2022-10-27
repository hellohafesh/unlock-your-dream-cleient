import React from 'react';

const Premium = () => {
    return (
        <div>
            <h1> Wellcome Your Premium Version On Your Course</h1>
            <section>
                <div className=" d-lg-flex d-md-flex bg-primary rounded pt-5  p-5 mb-5">
                    <div className=" col-md-8 col-lg-8 col-12 text-white">
                        <h1> Participate in free Vedios </h1>
                        <p>Can't decide which course to take for freelancing? Join our free seminar. In these subject
                            wise
                            seminars you will know
                            about the possibilities of each course. Moreover, by talking to the expert counselor present
                            in
                            the seminar, you can
                            easily decide to choose the appropriate course.</p>
                    </div>
                    <div className="col-4  ps-5 pt-5 ms-5 ">
                        <button type="button" className="btn btn-light btn-lg  text-primary fw-bold" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            Join Now
                        </button>

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <h2> Join With Google Meet</h2>
                                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                                <div id="emailHelp" className="form-text">We'll never share your email with
                                                    anyone else.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Join</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Premium;