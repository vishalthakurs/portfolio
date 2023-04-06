import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Education from './pages/Education';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/project/:id' element={<ProjectDisplay />}></Route>
        <Route path='/education' element={<Education />}></Route>
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
