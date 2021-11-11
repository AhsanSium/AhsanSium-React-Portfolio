import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Components/AboutMe/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Shared/Footer/Footer";
import TopMenu from './Components/Shared/NavBarMain/TopMenu';

function App() {
  return (
    <div className="text-center">


    <Router>
      <TopMenu></TopMenu>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/*">
            <h3>404 Error!</h3>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
