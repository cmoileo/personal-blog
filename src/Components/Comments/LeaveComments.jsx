import Reveal from 'react-reveal/Reveal';
import { useContext, useRef } from 'react';
import {setDoc, doc} from 'firebase/firestore'
import { db } from '../../Firebase/FirebaseConfig';
import { getDoc } from "firebase/firestore";
import { UserContext } from '../../Contexts/UserContext';

export default function LeaveComments() {
  const {collectionData} = useContext(UserContext)

  let comments = {}

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const commentRef = useRef(null)

  let articleTarget = localStorage.getItem('articleTarget')

  const userDoc = doc(db, "Articles", articleTarget);

  const handleSumbit = (e) => {
    e.preventDefault()
    addComment()
  }

  let docData = {};

  async function addComment() {
      const docRef = doc(db, "Articles", articleTarget);
      const docSnap = await getDoc(docRef);
      docData = docSnap.data();
      comments = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        content: commentRef.current.value,
        id: docData.comment.length + 1
      }
      if (!docData.comment) {
          docData.comment = [];
      }
      docData.comment.push(comments);
      setDoc(userDoc, docData, {merge: true});
  }

  return (
    <Reveal>
            <div className="leave-comments-container">
            <h1 className="main-title">Leave a comment</h1>
                <form className="leave-comments-container__form">
                    <div className="">
                        <input ref={nameRef} type="leave-comments-form__name" className="name" placeholder="Name"/>
                        <input ref={emailRef} type="leave-comments-form__email" className="email" placeholder="Email"/>
                    </div>
                    <textarea ref={commentRef} className="leave-comments-form__textarea" placeholder="Comment..."></textarea>
                    <button onClick={(e) => handleSumbit(e)} className="newsletter-cta__button leave-comments-form__button">Submit</button>
                </form>
        </div>
    </Reveal>
  )
}
