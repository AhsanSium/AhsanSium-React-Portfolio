import React from 'react';
import ahsanPhoto from '../../../images/Ahsan2.png';

const HeaderMain = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className='text-start ms-auto' style={{width:'80%'}}>

                        <h5>Hi there, I am Ahsan Sium</h5>
                        <h2>Full Stack Web Developer</h2>
                        <p>
                            Check out my Personal Portfolio, <br/> Let Me Know How I Can Help
                        </p>
                        <a target="_blank" href="https://drive.google.com/uc?export=download&id=1oWiscAoyEX66xSvReprnigzSx02jUtZG">
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