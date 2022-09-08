import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Project from './pages/Project'
import Edit from './pages/Edit'
import Create from './pages/Create'
import Nav from './componets/Nav'
import Footer from './componets/Footer'

const App = () => {
  return (
    <div className="App">

      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Project />} />
          <Route path="/:id/edit" element={<Edit />} />
        </Routes>     
      </Router>
      <Footer />
    </div>
  )
}

export default App 