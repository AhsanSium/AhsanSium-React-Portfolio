import React from 'react';
import CountUp from 'react-countup';
import './Intro.css';

const Intro = () => {
    return (
        <div className='d-flex justify-content-center'>
            
            <div className="row d-flex align-items-center">
                <div className="col-md-7">
                    <div className='w-75 text-start'>
                        <h6>CREATIVE WEB DEVELOPER</h6>
                        <h4>MD.Ahsanul Haque Sium</h4>
                        <p className='text-muted'>As a developer, I love to create new features and items. I want to make my application effective and flawless.
                        <br/>
                        I'm always positive and motivated. Committed to my job and Responsibility. You'll find me honest hardworking and humble as well. <br/>
                        I'm a lifelong learner, and always happy to adapt myself to new technology and updates.</p>
                        <div className='mt-5'>
                            <strong>Follow Me</strong>
                            <p>Github, LinkedIn</p> 
                        </div>

                    </div>
                </div>
                <div className="col-md-5 pt-5 counter-no-p">
                        <div className="row">
                            <div className="col-6">
                                <div className='hexagon hexa-1 p-3'>
                                <CountUp className="counter-no" start={0} end={24} duration={3} />
                                <br/>
                                <span>+</span>
                                <p>
                                Projects Completed
                                </p>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className='hexagon hexa-2 p-3'>
                                    <CountUp className="counter-no" start={0} end={300} duration={3} />
                                    <br/>
                                    <span>+</span>
                                    <p>
                                    Problem Solved
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                  
                            <div className="col-6 pt-2">
                                <div className='hexagon hexa-3 p-3'>
                                    <CountUp className="counter-no" start={0} end={260} duration={3} />
                                    <br/>
                                    <span>+</span>
                                    <p>
                                    Code Contribution
                                </p>
                                </div>
                            </div>
                            <div className="col-6 pt-2">
                                <div className="hexagon hexa-4 p-3">

                                <CountUp  className="counter-no" start={0} end={2} duration={4} />
                                <br/>
                                <span>+</span>
                                <p>
                                Year's Experience
                                </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default Intro;