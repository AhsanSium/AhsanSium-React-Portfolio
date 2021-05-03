import React from 'react';
import { Link } from 'react-router-dom';
import ahsan from '../../../images/Ahsan Sium logo.png';

const TopNavbar = () => {

    // window.onscroll = function() {myFunction()};

    // function myFunction() {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         console.log('Scroll');
    //     }
    // }

    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light navbar-mobile navfix sticky-top navbar-container">
            <div className="container-fluid ">
                            <Link className="navbar-brand ms-5" to='/' >
                                <img src={ahsan} alt=""/>
                            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link className="nav-link" to='/home' >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/projects' >
                                My Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about' >
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/blog' >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact' >
                                Contact
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;