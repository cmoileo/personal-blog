import { useRef, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar"
import { UserContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {db, storage} from "../../Firebase/FirebaseConfig"
import {setDoc, doc} from 'firebase/firestore'
import { collection, query, getDocs } from "firebase/firestore";
import PlusIcon from "../../assets/plus-icon.png"
import DeleteIcon from '../../assets/delete-icon.png'

export default function WriteNewArticle({navBarAnimation, setNavBarAnimation}) {
  const {currentUser}=useContext(UserContext)
  const textAreaRef = useRef(null)
  const nameRef = useRef(null)
  const imageRef = useRef(null)
  const tagRef = useRef(null)

  let [tagArray, setTagArray] = useState([])

  if (!currentUser) {
    return <Navigate to='/'></Navigate>
}

    const autosize = () => {
        setTimeout(function(){
            textAreaRef.current.style.cssText = 'height:auto; padding:0';
            textAreaRef.current.style.cssText = 'height:' + textAreaRef.current.scrollHeight + 'px';
      },0);
    }

  async function handleSubmit() {

    const file = imageRef.current.files[0];
    const storageRef = ref(storage, `images/${file.name}`);

    let postImageUrl

    const uploadTask = uploadBytesResumable(storageRef, file);

    const q = query(collection(db, "Articles"));
    const docsSnap = await getDocs(q)
    let i = -1
    docsSnap.forEach(doc => { i = doc._document.key.path.segments[6]; })

    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = date.toLocaleDateString('en-US', options);  

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
         setDoc(doc(db, "Articles", `${+i + +1}`), {
          name: `${nameRef.current.value}`,
          content: `${textAreaRef.current.value}`,
          image: `${postImageUrl}`,
          date: `${currentDate}`,
          tags: `${tagArray}`,
          index: `${+i + +1}`
        })
        })
     }
    )
  }

  const handleAddTag = () => {
    setTagArray(oldArray => [...oldArray, tagRef.current.value])
    setTimeout(() => {
      tagRef.current.value = ""
    }, 1);
  }

  const handleDeleteTag = (e) => {
    const index = e.target.id;
    setTagArray(oldArray => {
    oldArray.splice(index, 1);
    return [...oldArray];
    });        
}


  return (
    <div className="main-container">
         <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
         <Navbar navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>
         <div className="write-new-article-container">
            <input ref={nameRef} type="text" className="write-new-article-container__name" placeholder="Name of article"/>
            <textarea ref={textAreaRef} onKeyDown={autosize} className="write-new-article-container__content" placeholder="Type something..."></textarea>
            <label className="pointer write-new-article-container__image">
                 Select image
                 <input ref={imageRef} style={{display: "none"}} type="file" accept="image/png, image/jpg, image/jpeg" />
            </label>
            <input ref={tagRef} type="text" placeholder="Add tags" />
            {tagArray.map((tag, index) => {
          return (
            <div style={{display: "flex", alignItems: "center", gap: "10px"}} key={index}>
              <p className="main-text">{tag}</p>
              <img src={DeleteIcon} className="pointer" style={{width: "20px", height: "20px"}} onClick={(e) => handleDeleteTag(e)} alt="" />
            </div>
          )
        })}
            <img onClick={handleAddTag} src={PlusIcon} className="plus-icon pointer" alt="" />
           <button onClick={handleSubmit} className="admin-container__button">Publish Article</button>
         </div>
         <Footer />
    </div>
  )
}
