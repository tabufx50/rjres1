import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/resume' exact component={Resume} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
