import React from "react";
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
  return (
    <div className="min-vh-100" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Router>
        <ScrollToTop />
        <TopMenu />
        <Routes>
          <Route path="/about"   element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog"    element={<Blog />} />
          <Route path="/home"    element={<Home />} />
          <Route path="/"        element={<Home />} />
          <Route path="*"        element={
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
              <div className="text-center">
                <h1 className="counter-no mb-3">404</h1>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>// Page not found</p>
                <a href="/" className="btn-cyber-outline mt-3 d-inline-block">Return Home</a>
              </div>
            </div>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
