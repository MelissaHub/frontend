import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '/pages/home';
import Login from '/pages/login';
import Project from '/pages/project';
import Person from '/pages/person';
import Create from '/pages/create';
import Nav from '/componets/nav';
import Footer from '/componets/footer';

const App = () => {
  return (
    <div className="App">

      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<Person />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Project />} />
        </Routes>     
      </Router>
      <Footer />
    </div>
  );
}

export default App 