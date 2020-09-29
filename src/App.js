import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import NavBar from './components/NavBar';
/* Pages */
import About from "./pages/About";
import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import Music from './pages/Music';


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
          <Route exact path="/music" component={Music} />

        </Router>
      </div>
    );
  }

}

export default App;
