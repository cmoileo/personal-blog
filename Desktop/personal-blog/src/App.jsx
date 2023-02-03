import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Articles from "./Pages/Articles/Articles"
import AboutMe from './Pages/AboutMe/AboutMe'
import Register from './Pages/Register/Register'
import './Styles/Main.scss'

function App() {

  return (
    <Router>
     <Routes>
     <Route path="/" element={<Articles />} />
     <Route path="/about-me" element={<AboutMe />} />
     <Route path="/register" element={<Register />} />
     <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </Router>
  )
}

export default App
