import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
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
    <ThemeProvider>
      <div style={{ backgroundColor: 'var(--bg)', color: 'var(--t1)', minHeight: '100vh' }}>
        <Router>
          <ScrollToTop />
          <TopMenu />
          <Routes>
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact"  element={<ContactPage />} />
            <Route path="/blog"     element={<Blog />} />
            <Route path="/home"     element={<Home />} />
            <Route path="/"         element={<Home />} />
            <Route path="*"         element={
              <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--f-mono)', color: 'var(--ac)', fontSize: '5rem', fontWeight: 800, margin: 0, lineHeight: 1 }}>404</p>
                  <p style={{ color: 'var(--t3)', fontFamily: 'var(--f-mono)', margin: '12px 0 24px' }}>// page_not_found</p>
                  <a href="/" className="btn-outline">← return_home()</a>
                </div>
              </div>
            } />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
