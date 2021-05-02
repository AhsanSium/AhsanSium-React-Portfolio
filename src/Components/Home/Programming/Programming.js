import React from 'react';
import js from '../../../images/js.png';

const Programming = () => {
    return (
        <div>
            <h3>Programming</h3>
            <div className="row">
                <div className="col-md-4 row">
                    <h5>Fluent</h5>
                    <div className="col">
                        <img src={js} alt="" className="img-fluid" style={{width:'100px'}} />
                        <strong>JavaScript</strong>
                    </div>
                    <div className="col">
                        <img src={js} alt="" className="img-fluid" style={{width:'100px'}} />
                        <strong>C</strong>
                    </div>
                    <div className="col">
                        <img src={js} alt="" className="img-fluid" style={{width:'100px'}} />
                        <strong>C ++</strong>
                    </div>

                </div>
                <div className="col-md-4">
                    <h5>Comfortable</h5>
                </div>
                <div className="col-md-4">
                    <h5>Tools</h5>
                </div>
            </div>
        </div>
    );
};

export default Programming;