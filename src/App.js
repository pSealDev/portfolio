import React, { Component } from 'react';
import Navigation from './Components/Nav.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Projects from './Components/Projects.js';
import Blog from './Components/Blog.js';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends Component {

  render() {
    return (
      <div>

        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>

        <Footer />


      </div>
    );

  }
}

export default App;
