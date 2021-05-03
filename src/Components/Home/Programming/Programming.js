import React from 'react';
import js from '../../../images/js.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import git from '../../../images/git.png';
import vscode from '../../../images/vscode.png';
import chrome from '../../../images/chromedevtool.png';
import firebase from '../../../images/firebase.png';
import heroku from '../../../images/heroku.png';
import netlify from '../../../images/netlify.png';
import './Programming.css';

const Programming = () => {

    const js = 75;
    const html5 = 90;
    const css3 = 85;
    const c = 60;
    const cPP = 65;
    const java = 50;

    return (
        <div className='pt-5 pb-5 container'>
            <div className="row rounded shadow p-5">
                <div className="col-md-8 row ">
                <h3 className="counter-no">Programming</h3>
                    <div className="col-md-6 row mt-5 d-flex justify-content-center">
                        <div className="col-2 col-md-4 p-2" style={{width:'120px'}}>
                        <CircularProgressbar value={js} text={`JS`} />
                        </div>
                        <div className="col-2 col-md-4 p-2" style={{width:'120px'}}>
                        <CircularProgressbar value={html5} text={`HTML5`} />
                        </div>
                        <div className="col-2 col-md-4 p-2" style={{width:'120px'}}>
                        <CircularProgressbar value={css3} text={`CSS3`} />
                        </div>
                    </div>
                    <div className="col-md-6 row mt-5 d-flex justify-content-center">
                        <div className="col-md-4 p-2" style={{width:'120px'}}>
                        <CircularProgressbar value={cPP} text={`C++`} />
                        </div>
                        <div className="col-md-4 p-2" style={{width:'120px'}}>
                        <CircularProgressbar value={c} text={`C`} /> 
                        </div>
                        <div className="col-md-4 p-2" style={{width:'120px'}}>
                        <CircularProgressbar value={java} text={`JAVA`} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 row toolsSection">
                    <h3 className='counter-no'>Tools</h3>
                    <div className="col-md-6 row mt-2 d-flex justify-content-center w-100 text-muted">
                        <div className="col-3 col-md-4 p-2" >
                            <img src={git}  alt="" />
                            <p>Git</p>
                        </div>
                        <div className="col-3 col-md-4 p-2">
                            <img src={vscode} alt=""  />
                            <p>VScode</p>
                        </div>
                        <div className="col-3 col-md-4 p-2">
                            <img src={chrome}  alt="" />
                            <p>Chrome Dev tool</p>
                        </div>
                    </div>
                    <div className="col-md-6 row mt-2 d-flex justify-content-center w-100 text-muted">
                        <div className="col-3 col-md-4 p-2" >
                            <img src={firebase} alt=""  />
                            <p>Firebase</p>
                        </div>
                        <div className="col-3 col-md-4 p-2" >
                            <img src={heroku}  alt=""  />
                            <p>Hereoku</p>
                        </div>
                        <div className="col-3 col-md-4 p-2" >
                            <img src={netlify}  alt=""  />
                            <p>Netlify</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programming;