import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='container aboutme-container '>
            <div>
                <h3 className='counter-no mt-5'> About ME</h3>

            </div>
            <div className='row pt-5 pb-5 aboutme-header d-flex align-items-center '>
                <div className="col-md-8 ">
                    <h3>MD.AHSANUL HAQUE</h3>
                    <h5>Junior Web Developer</h5>
                </div>
                <div className="col-md-4 text-start">
                    <a className='d-block text-dark' href='tel:+8801521438368'>
                        <FontAwesomeIcon className='me-2' icon={faMobileAlt} size="2x" /><span className='fs-5'>+8801521438368</span>
                    </a>
                    <a className='d-block text-dark' href='mailto:ahsanulhaquesium@gmail.com'><FontAwesomeIcon className='me-2' icon={faEnvelope} size="2x" />
                        <span className='fs-5'>ahsanulhaquesium@gmail.com</span> 
                    </a>
                    <a className='text-dark' rel='noreferrer' target='_blank' href="https://github.com/AhsanSium">
                        <FontAwesomeIcon className='' icon={faGithub} size="2x" />
                        
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/ahsan-sium/">
                        <FontAwesomeIcon className='ms-4' icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>

            <div className="row fs-5">
                <div className="col-md-8">
                    <div className='shadow p-5 rounded'>
                        <h4>SKILLS</h4>
                        <div>
                            <h5>Proficient with:</h5>
                            <ul className=''>
                                <li>JavaScript (ES6)</li>
                                <li>React/Redux</li>
                                <li>Node.js</li>
                                <li>HTML5 CSS3</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Comfortable With:</h5>
                            <ul>
                                <li>C</li>
                                <li>C ++</li>
                                <li>Python3</li>
                                <li>OOP</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Additional Skills:</h5>
                            <ul>
                                <li>SEO(technical)</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>

                    <div className=' shadow p-5 rounded'>
                        <h4>PROJECTS</h4>
                        <h5>
                            Yachts-Voyage: (Full-stack Website)
                        </h5>
                        <strong>Features:</strong>
                        <ul>
                            <li>Different Admin and User Interace</li>
                            <li>Private Route</li>
                            <li>Fully Dynamic Website</li>
                            <li>Users Can write Review</li>
                            <li>User Can see Order Status Filtered by User Email</li>
                            <li>Credit Card Payment Method Added</li>
                            <li> Full responsive Design.</li>
                        </ul>
                        <strong>Technology Used:</strong>
                        <p>React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap Firebase, Stripe ,Heroku.</p>
                        <a href="/projects">

                        <button className='btn btn-primary'>See more</button>
                        </a>
                        </div>

                    <div className='shadow p-5 rounded'>
                        {/* 
                        <div>
                            <h5>
                                Yachts-Voyage: (Full-stack Website)
                            </h5>
                            <strong>Live Site    Github Client    GithubServer</strong>
                            <strong>Features:</strong>
                            <ul>
                                <li>Different Admin and User Interace</li>
                                <li>Private Route</li>
                                <li>Fully Dynamic Website</li>
                                <li>Users Can write Review</li>
                                <li>User Can see Order Status Filtered by User Email</li>
                                <li>Credit Card Payment Method Added</li>
                                <li> Full responsive Design.</li>
                            </ul>
                            <strong>Technology Used:</strong>
                            <p>React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap Firebase, Stripe ,Heroku.</p>
                        </div>
                        <div>
                            <h5>
                                PhonoMania: (Semi E-commerce Website)
                            </h5>
                            <strong>Live Site    Github Client    GithubServer</strong>
                            <strong>Features:</strong>
                            <ul>
                                <li>User Can Order SmartPhone</li>
                                <li>Order Page is secured with Firebase Auth</li>
                                <li>Order Information is saved on Database</li>
                                <li>Users Can write Review</li>
                                <li>User Can see Order Status Filtered by User Email</li>
                                <li> User Can See Order Information in Oder's Page</li>
                                <li>Admin can add , Remove , Edit Product.</li>
                                <li>Full Responsive UI</li>
                            </ul>
                            <strong>Technology Used:</strong>
                            <p>React.js, JavaScript, Node.js, Express.js, MongoDB, Material UI, Firebase ,Heroku.</p>
                        </div>
                        <div>
                            <h5>
                                City Transport: (Simple Ride Sharing Website)
                            </h5>
                            <strong>Live Site    Github </strong>
                            <strong>Features:</strong>
                            <ul>
                                <li>Used Google Firebase. User Login and Sign Up</li>
                                <li>E-mail Password Login and Sign Up </li>
                                <li> Email and Password Validation added</li>
                                <li>. Google Sign Up. Private Route Implementation</li>
                                <li>Responsive Design</li>
                                <li> Added Here Maps. Added Maps Drag and Zoom Functionality</li>
                            </ul>
                            <strong>Technology Used:</strong>
                            <p>React.js, JavaScript, Material UI, Font-Awesome, Here Maps</p>
                        </div> */}

                        <h4>Highlights</h4>
                        <ul>
                            
                            <li>Effective Knowledge in Data Structure, Algorithms and OOP.</li>
                            <li>Solved 100+ Practice Problems.</li>
                            <li>2 Years’ Experience in Digital Marketing.</li>
                            <li>1.5 Years’ Experience in Amazon Affiliate Marketing and AdSense.</li>
                            <li>Fluent in WordPress CMS, Plugins, ElementorPro. WordPress Theme Building</li>
                        </ul>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className='shadow p-5 rounded'>
                        <h4> PROGRAMMING </h4>
                        <ul >
                            <li>JavaScript </li>
                            <li>C/C++</li>
                            <li>Python3</li>
                            <li>Java</li>
                        </ul>
                        
                         
                         
                        
                    </div>
                    <div className='shadow p-5 rounded'>
                        <h4>Education</h4>
                        <p><strong>Course:</strong>: Full-Stack Web development <br /> Institution: Programming Hero <br />Duration:2021(January-present)</p>
                        <p><strong>BSC:</strong>Computer Science and Engineering
                        <br /> Institution:  Mawlana Bhashani Science and
                        Technology University <br />Duration:(2018- Present)</p>
                        <p><strong>HSC:</strong>Science <br /> Institution:  Birshreshtha Munshi Abdur 
                        Rouf Public College</p>
                    </div>
                    <div className='shadow p-5 rounded'>
                        <h4>Soft Skills</h4>
                        <div className='text-start'>
                        <p>Fluent in English Oral and Written Communication. </p>    
                        <p>Motivated and Ethical nature</p>    
                        <p>Always Prepare to learn new technology and upgrade. </p>
                        <p>Fully Committed to my job and Responsibility.</p>    

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;