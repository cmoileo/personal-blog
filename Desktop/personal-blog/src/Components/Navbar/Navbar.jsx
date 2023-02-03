import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  const handleNavigateToAM = () => {
    navigate("/about-me")
  }

  const handleNavigateToArticles = () => {
    navigate("/")
  }

  return (
    <>
      <div className="navbar-container">
      <div className="navbar-container__left">
        <h3 className='third-title pointer' onClick={handleNavigateToAM}>About Me</h3>
        <h3 className='third-title pointer' onClick={handleNavigateToArticles}>Articles</h3>
      </div>
      <div className="navbar-right">
        <h3 className='third-title pointer'>Log In</h3>
      </div>
    </div>
    </>
  )
}
