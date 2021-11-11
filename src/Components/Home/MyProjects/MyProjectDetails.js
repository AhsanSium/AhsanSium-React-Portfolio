import React from 'react';
import liveSite from '../../../images/internet.png';
import clientSite from '../../../images/monitor.png';
import serverSite from '../../../images/server.png';
import './MyProjectDetails.css';

const MyProjectDetails = ({data}) => {

    console.log(data);

    return (
        <div className="row p-5 d-flex justify-content-around">
                <div className="col-md-7 rounded shadow">
                    <h4>{data.name}</h4>
                    <img src={data.img1} className="img-fluid " alt=""/>
                </div>
                <div className="col-md-5 ps-5 text-start pt-5 ">
                    <div className=''>
                        <h5>{data.description}</h5>
                        <p className="text-muted">{data.features}</p>

                    </div>
                    <div className='row project-details text-muted text-center rounded shadow p-2 '>
                        <div className="col ">
                            <a href={data.liveSite} target="_blank" rel='noreferrer'>
                            <img src={liveSite} className='' alt=""/>
                            <p>Live Site</p>
                            </a>
                        </div>
                        <div className="col">
                            <a href={data.codeClient?data.codeClient:'#'} target="_blank" rel='noreferrer'>
                                <img src={clientSite} alt=""/>
                                <p>Client</p>
                            </a>
                        </div>
                        {
                            data.codeServer &&
                            <div className="col">
                                <a href={data.codeServer?data.codeServer:''} target="_blank" rel='noreferrer'>
                                <img src={serverSite} alt=""/>
                                <p>Server</p>
                                </a>
                            </div>
                            
                        }
                    </div>
                </div>
        </div>
    );
};

export default MyProjectDetails;