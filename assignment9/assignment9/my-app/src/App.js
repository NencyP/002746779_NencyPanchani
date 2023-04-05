import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Login/login';
import About from './App/About/about';
import Home from './App/Home/home';
import Contact from './App/Contact/contact';
import Jobs from './App/Jobs/jobs';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/jobs" element={<Jobs/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;