import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import Project from './pages/project'
import Edit from './pages/edit'
import Create from './pages/create'
import Nav from './componets/nav'
import Footer from './componets/footer'

const App = () => {
  return (
    <div className="App">

      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Project />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>     
      </Router>
      <Footer />
    </div>
  )
}

export default App 