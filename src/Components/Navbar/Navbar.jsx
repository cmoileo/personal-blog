import { useNavigate } from "react-router-dom"

export default function Navbar({navBarAnimation, setNavBarAnimation}) {
  const navigate = useNavigate()

  const handleNavigateToAM = () => {
    setNavBarAnimation("AboutMe");
    navigate("/about-me")
  }

  const handleNavigateToArticles = () => {
    setNavBarAnimation("Articles");
    navigate("/")
  }

  const handleNavigateToLogin = () => {
    navigate("/login")
  }

  return (
    <>
      <div className="navbar-container">
      <div className="navbar-container__left">
        <h3 className={navBarAnimation === "AboutMe" ? "third-title pointer animBarLeft" : "third-title pointer"} onClick={handleNavigateToAM}>About Me</h3>
        <h3 className={navBarAnimation !== "AboutMe" ? "third-title pointer animBarRight" : "third-title pointer"} onClick={handleNavigateToArticles}>Articles</h3>
      </div>
      <div className="navbar-right">
        <h3 className='third-title pointer' onClick={handleNavigateToLogin}>Log In</h3>
      </div>
    </div>
    </>
  )
}
