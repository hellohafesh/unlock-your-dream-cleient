import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blank = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center '>
                <Container>
                    <h1>Page 404</h1>
                    <button type="button" className="btn btn-primary btn-block mb-4">
                        <Link className='text-dark' to='/'>Back Home</Link>
                    </button>

                </Container>

            </div>



        </div>
    );
};

export default Blank;