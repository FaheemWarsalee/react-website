import React from "react";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/About';
import "./css/App.css";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
