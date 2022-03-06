import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
