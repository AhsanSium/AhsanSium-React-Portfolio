import React from 'react';
import liveSitePic from '../../../images/internet.png';
import clientSite from '../../../images/monitor.png';
import serverSite from '../../../images/server.png';
const ProjectDetails = ({project}) => {

    const {id, img1, img2, img3, name, features ,description, technology, liveSite, codeClient, codeServer} = project;

    console.log(description);

    return (
        <div className='container shadow rounded pt-5'>
            <h3>{name}</h3>
            <div className='d-flex justify-content-center p-5'>           
            <div id={id} className="carousel slide w-75 carousel-dark  shadow" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={'#'+id} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={'#'+id} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={'#'+id} data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                           
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={'#'+id} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target={'#'+id} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div className='pt-2 pb-5 '>
                <h4> {description}</h4>
                <h6> Features:</h6>
                <p className='fw-5'>{features}</p>
                <h6> Technology:</h6>
                <p>{technology}</p>
            </div>
            <div className='row project-details text-muted text-center rounded shadow p-2 '>
                        <div className="col ">
                            <a href={liveSite} target="_blank" rel='noreferrer'>
                            <img src={liveSitePic} className='' alt=""/>
                            <p>Live Site</p>
                            </a>
                        </div>
                        <div className="col">
                            <a href={codeClient?codeClient:'#'} target="_blank" rel='noreferrer'>
                                <img src={clientSite} alt=""/>
                                <p>Client</p>
                            </a>
                        </div>
                        {
                            codeServer &&
                            <div className="col">
                                <a href={codeServer?codeServer:''} target="_blank" rel='noreferrer'>
                                <img src={serverSite} alt=""/>
                                <p>Server</p>
                                </a>
                            </div>
                            
                        }
            </div>

        </div>
    );
};

export default ProjectDetails;