import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Components/AboutMe/About";
import Blog from "./Components/Blog/Blog";
import ContactPage from "./Components/Contact/ContactPage";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Shared/Footer/Footer";
import TopMenu from './Components/Shared/NavBarMain/TopMenu';
import ScrollToTop from './Components/Shared/ScrollToTop/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="text-center min-h-screen bg-(--app-bg) text-(--app-text) transition-colors duration-300">

      <button
        type="button"
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-50 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow-md"
        style={{
          backgroundColor: 'var(--surface)',
          color: 'var(--app-text)',
          borderColor: 'color-mix(in srgb, var(--app-text) 20%, transparent)'
        }}
      >
        {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      </button>


    <Router>
      <ScrollToTop />
      <TopMenu></TopMenu>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h3>404 Error!</h3>} />
        </Routes>
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
