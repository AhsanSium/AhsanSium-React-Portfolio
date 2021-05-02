import React from 'react';

const ProjectDetails = ({project}) => {

    const {id, img1, img2, img3, name, features ,description, technology, liveSite, codeClient, codeServer} = project;

    console.log(description);

    return (
        <div className='container'>
            <h3>{name}</h3>
            <div className='d-flex justify-content-center'>           
            <div id={id} className="carousel slide w-75" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={'#'+id} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={'#'+id} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={'#'+id} data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev bg-info" type="button" data-bs-target={'#'+id} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next bg-info" type="button" data-bs-target={'#'+id} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <p>{description}</p>
            <p>{features}</p>
            <p>{technology}</p>
        </div>
    );
};

export default ProjectDetails;