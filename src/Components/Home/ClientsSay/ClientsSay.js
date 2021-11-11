import React from 'react';
import client1 from '../../../images/client1.jpg';
import client2 from '../../../images/client2.jpg';
import client3 from '../../../images/client3.jpg';

const ClientsSay = () => {
    return (
        <div className='d-flex justify-content-center pt-5 pb-5'>
            <div className="row container-sm rounded shadow p-5">
                <div className="col-md-5 col-lg-7 d-flex align-items-center">
                    <div className=''>
                        <h6 className='text-danger'>CLIENTS TESTIMONIAL</h6>
                        <h3 className='client-header'>What Clients say about Me</h3>
                    </div>
                </div>
                <div className="col-md-7 col-lg-5">
                    <div className=''>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={client1} class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block fs-5 client-caption">
                                    <h5>John Smith</h5>
                                    <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum ea amet adipisci totam perspiciatis. </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={client2} class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block fs-5 client-caption">
                                    <h5>Mike Williams</h5>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum ea amet adipisci totam perspiciatis. </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={client3} class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block fs-5 client-caption">
                                    <h5> Peter Jonson </h5>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum ea amet adipisci totam perspiciatis. </p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default ClientsSay;