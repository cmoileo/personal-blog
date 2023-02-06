import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Articles from "./Pages/Articles/Articles"
import Article from "./Pages/Articles/Article"
import AboutMe from './Pages/AboutMe/AboutMe'
import Register from './Pages/Register/Register'
import Admin from './Pages/Private/Admin'
import './Styles/Main.scss'
import WriteNewArticle from "./Pages/Private/WriteNewArticle";
import Login from "./Pages/Login/Login";
import { useState } from "react";

function App() {
  const [navBarAnimation, setNavBarAnimation] = useState("Articles")

  return (
    <Router>
     <Routes>
     <Route path="/" element={<Articles navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation} />} />
     <Route path="/article" element={<Article navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>} />
     <Route path="/about-me" element={<AboutMe navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation} />} />
     <Route path="/register" element={<Register />} />
     <Route path="/admin" element={<Admin navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>} />
     <Route path="/login" element={<Login navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>} />
     <Route path="/new-article" element={<WriteNewArticle navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>} />
     <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </Router>
  )
}

export default App
