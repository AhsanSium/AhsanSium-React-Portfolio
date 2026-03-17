import React from 'react';
import ClientsSay from './ClientsSay/ClientsSay';
import ContactMe from './ContactMe/ContactMe';
import HeaderMain from './HeaderMain/HeaderMain';
import Intro from './Intro/Intro';
import MyBlog from './MyBlog/MyBlog';
import MyProjects from './MyProjects/MyProjects';
import Programming from './Programming/Programming';
import Skills from './Skills/Skills';

const Home = () => (
  <main>
    <HeaderMain />
    <Intro />
    <Skills />
    <Programming />
    <MyProjects />
    <ContactMe />
    <ClientsSay />
    <MyBlog />
  </main>
);

export default Home;
