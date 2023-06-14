
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Articles from './Articles';
import Project from './Project';
import Contact from './Contact';


function App() {
  const pageSize=9;
  return (
    <Router>
    <Navbar/>
    
      <Routes>
      <Route exact path="/" element={<Home category="general" pageSize={pageSize}/> }/> <Route/>
      <Route exact path="/articles" element={<Articles category="articles" pageSize={pageSize}/> }/> <Route/>
      <Route exact path="/project" element={<Project category="project" pageSize={pageSize}/> }/> <Route/>
      <Route exact path="/contact" element={<Contact category="contact" pageSize={pageSize}/> }/> <Route/>
    </Routes>
    </Router>
     );
}

export default App;
