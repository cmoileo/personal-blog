import { useRef } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar"
import { UserContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {db, storage} from "../../Firebase/FirebaseConfig"
import {getDoc, setDoc, doc} from 'firebase/firestore'
import { collection, query, where, getDocs } from "firebase/firestore";

export default function WriteNewArticle({navBarAnimation, setNavBarAnimation}) {
  const {currentUser}=useContext(UserContext)
  const textAreaRef = useRef(null)
  const nameRef = useRef(null)
  const imageRef = useRef(null)

//   if (!currentUser) {
//     return <Navigate to='/'></Navigate>
// }

    const autosize = () => {
        setTimeout(function(){
            textAreaRef.current.style.cssText = 'height:auto; padding:0';
            textAreaRef.current.style.cssText = 'height:' + textAreaRef.current.scrollHeight + 'px';
      },0);
    }

  async function handleSubmit() {
    const userId = currentUser.uid

    const file = imageRef.current.files[0];
    const storageRef = ref(storage, `images/${file.name}`);

    let postImageUrl

    const uploadTask = uploadBytesResumable(storageRef, file);

    const q = query(collection(db, "Articles"));
    const docsSnap = await getDocs(q)
    let i = 0
    docsSnap.forEach(doc => { i++; console.log(i); })

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         postImageUrl = downloadURL
         setDoc(doc(db, "Articles", `${i+1}`), {
          name: `${nameRef.current.value}`,
          content: `${textAreaRef.current.value}`,
          image: `${postImageUrl}`
        })
        })
     }
    )
  }


  return (
    <div className="main-container">
         <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
         <Navbar navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>
         <div className="write-new-article-container">
            <input ref={nameRef} type="text" className="pointer write-new-article-container__name" placeholder="Name of article"/>
            <textarea ref={textAreaRef} onKeyDown={autosize} className="pointer write-new-article-container__content" placeholder="Type something..."></textarea>
            <label className="pointer write-new-article-container__image">
                 Select image
                 <input ref={imageRef} style={{display: "none"}} type="file" accept="image/png, image/jpg, image/jpeg" />
            </label>
           <button onClick={handleSubmit} className="admin-container__button">Publish Article</button>
         </div>
         <Footer />
    </div>
  )
}
