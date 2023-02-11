import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { UserContext } from "../../Contexts/UserContext"
import { useContext, useRef } from "react"
import {db} from "../../Firebase/FirebaseConfig"
import {setDoc, doc} from 'firebase/firestore'
import { Navigate } from "react-router-dom";

export default function ModifyArticle({navBarAnimation, setNavBarAnimation}) {
    const {collectionData, currentUser} = useContext(UserContext)

    if (!currentUser) {
        return <Navigate to='/'></Navigate>
    }

    const textareaRef = useRef(null)

    let articleTarget = localStorage.getItem('articleTarget')

    const handleResize = () => {
        if (textareaRef.current !== null) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    }

    async function handleUpdate() {
    await setDoc(doc(db, "Articles", `${articleTarget}`), {
        content : `${textareaRef.current.value}`
      }, {merge: true}) ;
    }

    document.addEventListener("mousemove", () => {handleResize()})

  return (
    <div className="main-container">
        <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
        <Navbar navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>
        <div className="edit-article-container">
            <textarea ref={textareaRef} defaultValue={collectionData[articleTarget]?.content} className="main-text" />
            <button className="admin-container__button" onClick={() => handleUpdate()}>Update</button>
        </div>
        <div style={{position: "absolute", bottom: "300px", left: 0, transform: "translateY(100px)"}}>
          <Footer />
        </div>
    </div>
  )
}
