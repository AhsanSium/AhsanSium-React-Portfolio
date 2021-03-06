import React from 'react';
import ClientsSay from './ClientsSay/ClientsSay';
import ContactMe from './ContactMe/ContactMe';
import HeaderMain from './HeaderMain/HeaderMain';
import Intro from './Intro/Intro';
import MyBlog from './MyBlog/MyBlog';
import MyProjects from './MyProjects/MyProjects';
import Programming from './Programming/Programming';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className='mt-5'>
            <HeaderMain></HeaderMain>
            <Intro></Intro>
            <Skills></Skills>
            <Programming></Programming>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
            <ClientsSay></ClientsSay>
            <MyBlog></MyBlog>
        </div>
    );
};

export default Home;