import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
            <h3>Follow Me</h3>
            <div className='p-5 social-container'>
                <a className='' target='_blank' href="https://www.facebook.com/ahsan.sium">
                <FontAwesomeIcon className='p-2' icon={faFacebookSquare} size="4x" />

                </a>
                <a target='_blank' href="https://www.linkedin.com/in/ahsan-sium/">
                <FontAwesomeIcon className='p-2' icon={faLinkedin} size="4x" />
                </a>
                <a target="_blank" href="https://twitter.com/ahsan_sium">
                <FontAwesomeIcon className='p-2' icon={faTwitter} size="4x" />

                </a>
                <a target="_blank" href="https://www.instagram.com/ahsanulhaque039/">
                <FontAwesomeIcon className='p-2' icon={faInstagram} size="4x" />

                </a>
            </div>
            <ul class="nav nav-tabs d-flex justify-content-center pt-5 pb-5">
                
                <li class="nav-item">
                    <Link class="nav-link" to='/home'>
                        Home
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/projects">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="about">About Me</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/blog">Blog</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                </ul>
            </div>
            <p className='pt-5 text-dark'>Copyright © 2020-21. All rights reserved. Developed By Ahsan Sium</p>
        </div>
    );
};

export default Footer;