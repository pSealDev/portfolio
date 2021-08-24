import React, {Component} from 'react';
import Nav from './Components/Nav.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';

class App extends Component {

  render(){
    return(
      <div>Priscilla Seal's Website
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
        <Nav />
        <About />
        <Projects />
      </div>
    );
    
  }
}

export default App;
