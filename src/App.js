import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
//components
import Navbar from './components/Navbar'
//pages
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
