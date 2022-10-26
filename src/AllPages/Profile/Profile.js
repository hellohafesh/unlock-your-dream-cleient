import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';

const Profile = () => {
    const { updateUserProfile } = useContext(AuthContex);
    const { user } = useContext(AuthContex);
    const photoURLRef = useRef(user?.photoURL);
    const nameRef = useRef(user?.displayName);
    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const photoURL = photoURLRef.current.value;

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>WELLCOME to your Profile</h1>
            <Container>
                <Row>
                    <Col lg="8" sm="12" >
                        <Container>
                            <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center pb-0 mb-5 p-2'>
                                <div className=' w-100 pb-0 '>
                                    <div className='w-100 pb-lg-0 p-lg-5   pe-lg-5 '>
                                        <div className='ps-lg-5  pe-lg-5 ps-md-5  pe-md-5 '>
                                            <h1 className='text-center'>Edit Your Profile</h1>
                                            <p className='text-center'>For Your Better Future</p>
                                            <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                                <label className="form-label" for="form2Example1">Email address</label>
                                                <input type="email" readOnly defaultValue={user?.email} name="email" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                                <label className="form-label" for="form2Example1"> Your Name</label>
                                                <input type="text" ref={nameRef} defaultValue={user?.displayName} name="name" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-4 ps-lg-5  pe-lg-5 ">
                                                <label className="form-label" for="form2Example1">Photo URL</label>
                                                <input type="text" ref={photoURLRef} defaultValue={user?.photoURL} name="photoURL" className="form-control" />
                                            </div>

                                            <div className='ps-lg-5'>
                                                <button type="submit" className="btn btn-primary btn-block mb-4" >Upate Your Profile</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Container >
                    </Col>
                    <Col lg="4" sm="12">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente deleniti dolor sit possimus, minus esse enim unde reiciendis hic porro, dignissimos veritatis velit aliquid! Nesciunt odit quas provident in quasi reiciendis placeat enim praesentium rem, autem, architecto vel illo, ipsam consectetur? Quis velit iusto atque molestiae accusamus, alias, optio aliquam dolorum tenetur obcaecati eligendi, minus nam cum quibusdam facere laboriosam! Dolorum iusto nemo impedit dolor quisquam cupiditate architecto odio assumenda necessitatibus id harum dolores perspiciatis, debitis, atque sequi deleniti? Fugit delectus, incidunt nesciunt velit at hic consequuntur. In doloribus, error molestias doloremque at nulla libero fuga quae mollitia, rem necessitatibus saepe voluptatibus suscipit deserunt tempora atque porro consequatur corporis veniam animi ipsam officiis neque! Deserunt suscipit incidunt rerum perspiciatis repellendus ea mollitia recusandae at reiciendis. Enim excepturi voluptate nam odio, ullam, eveniet neque corporis consequuntur reiciendis dicta numquam facere quasi, recusandae debitis laborum iusto eos obcaecati? Cumque distinctio et sit nam fugiat, odio totam accusantium optio aspernatur natus rerum iure unde possimus eligendi culpa a odit eum, repellendus eaque ullam labore nobis quia, quibusdam est? Sapiente cumque harum provident quisquam at dolorum expedita. Consequatur ullam praesentium qui incidunt mollitia alias quisquam beatae eaque quae corrupti recusandae dolorum accusantium ratione enim, aspernatur quod ea, voluptas voluptatem culpa! Iusto suscipit tempore veniam cum perferendis voluptas optio nisi ab? Similique, veritatis, tempore asperiores eum nisi cumque inventore delectus debitis deserunt quis doloremque libero? Beatae iure dolore iusto. Recusandae tenetur in praesentium maxime voluptatum rem, quibusdam, laudantium quidem quas alias vitae veritatis. Neque perferendis cum pariatur. Sed itaque, debitis dolore totam cumque quasi illo mollitia animi officiis quo? Deserunt fugiat quidem, autem, perspiciatis voluptatum laboriosam excepturi illo molestiae harum minima culpa perferendis tempora eos at mollitia eveniet cumque? Qui quaerat voluptatum nam quos minima vero! Quod ipsam, similique, aliquid accusantium inventore obcaecati cupiditate a reiciendis beatae vero animi iste, repudiandae minima. A repellat possimus tenetur est voluptas impedit amet perspiciatis rem porro hic eligendi qui dolorem facilis corrupti, quos placeat, fuga maiores explicabo sunt nobis dolores voluptatum earum neque? Sequi delectus rem magnam quaerat. Sed, aut animi velit omnis hic dolor quasi. Accusamus unde non earum sint necessitatibus esse ducimus, tempore doloremque. Quo dolor eveniet voluptatum nesciunt, recusandae tempore totam repellendus sequi rem, veniam illo laborum voluptates corporis hic. Rem perspiciatis eaque, architecto modi facilis eligendi inventore adipisci dignissimos fugiat. Officiis consequuntur excepturi fugiat! Eveniet sunt autem adipisci, nobis beatae consectetur reprehenderit, porro iste quis, quibusdam dolorem perspiciatis accusantium placeat. Ex magni at earum officiis assumenda quidem, modi voluptatum non minus numquam ad rem voluptatibus expedita repellendus, id in, culpa porro? Deserunt numquam odit, odio impedit omnis, officiis adipisci quisquam tempora vitae temporibus, porro minus iure quae modi similique consequatur. Consequuntur eum voluptatem harum, optio ut quibusdam, cupiditate nobis labore vitae ullam vero quos dignissimos vel aliquid, exercitationem praesentium placeat. Aperiam quidem, deleniti iure vitae expedita cupiditate quas voluptatibus animi recusandae tempora aliquid ipsam debitis vel sapiente, provident ipsa quia. Similique iure quasi assumenda molestias repudiandae quaerat laudantium voluptates voluptatibus explicabo animi, ex commodi.
                        </p>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Profile;