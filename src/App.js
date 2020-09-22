import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import NavBar from './components/NavBar';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Router>

          <NavBar />
        
          {/* Routes will render the specified page */}
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />

        </Router>
      </div>
    );
  }

}

export default App;
