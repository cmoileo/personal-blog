import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import ArticlesList from './ArticlesList'
import { UserContext } from '../../Contexts/UserContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Admin({navBarAnimation, setNavBarAnimation}) {
  const {currentUser}=useContext(UserContext)
  const navigate = useNavigate()

//   if (!currentUser) {
//     return <Navigate to='/'></Navigate>
// }


  return (
    <div className="main-container">
      <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
      <Navbar navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>
      <div className="admin-container">
        <h2 className="second-title admin-container__title">
          Published Articles
        </h2>
        <ArticlesList />
        <button onClick={() => navigate('/new-article')} className="admin-container__button">Write new article</button>
      </div>
      <Footer />
    </div>
  )
}
