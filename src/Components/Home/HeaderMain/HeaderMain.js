import React from 'react';
import ahsanPhoto from '../../../images/Ahsan2.png';

const HeaderMain = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className='text-start ms-auto' style={{width:'80%'}}>

                        <h5>Hi there, I am Ahsan Sium</h5>
                        <h2 className='counter-no'>Full Stack Web Developer</h2>
                        <p className='text-muted'>
                            Check out my Personal Portfolio, <br/> Let Me Know How Can I Help.
                        </p>
                        <a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/1qIVaSMXn708Cyd87ISc8gTe0I3mlrXq6/view">
                        <button className='btn styled-btn styled-btn-bg mt-3'> My Resume </button>
                        </a> 
                    </div>
                    </div>
                <div className="col-md-6 text-start">
                    <img className="img img-fluid" src={ahsanPhoto} alt="Ahsan Sium" style={{maxWidth:'90%'}} />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;