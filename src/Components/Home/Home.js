import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import Intro from './Intro/Intro';
import Programming from './Programming/Programming';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className='pt-5 container'>
            <HeaderMain></HeaderMain>
            <Intro></Intro>
            <Skills></Skills>
            <Programming></Programming>
        </div>
    );
};

export default Home;