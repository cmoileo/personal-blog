import { useRef } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar"
import { UserContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export default function WriteNewArticle({navBarAnimation, setNavBarAnimation}) {
  const {currentUser}=useContext(UserContext)
  const textAreaRef = useRef(null)

  if (!currentUser) {
    return <Navigate to='/'></Navigate>
}

    const autosize = () => {
        setTimeout(function(){
            textAreaRef.current.style.cssText = 'height:auto; padding:0';
            textAreaRef.current.style.cssText = 'height:' + textAreaRef.current.scrollHeight + 'px';
      },0);
    }


  return (
    <div className="main-container">
         <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
         <Navbar navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>
         <div className="write-new-article-container">
            <input type="text" className="pointer write-new-article-container__name" placeholder="Name of article"/>
            <textarea ref={textAreaRef} onKeyDown={autosize} className="pointer write-new-article-container__content" placeholder="Type something..."></textarea>
            <label className="pointer write-new-article-container__image">
                 Select image
                 <input style={{display: "none"}} type="file" accept="image/png, image/jpg, image/jpeg" />
            </label>
            <button className="admin-container__button">Publish Article</button>
         </div>
         <Footer />
    </div>
  )
}
