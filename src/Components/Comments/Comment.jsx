import { useContext, useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import { UserContext } from '../../Contexts/UserContext';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';

export default function Comment() {
  const [commmentsState, setCommentsState] = useState([])

  async function getDocData() {
    const articleDoc = doc(db, "Articles", localStorage.getItem('articleTarget'));
    const articleDocData = (await getDoc(articleDoc)).data()

    setCommentsState(articleDocData.comment)
}

  useEffect(() => {
    getDocData()
  }, []);
  

  return (
    <>
{commmentsState.map((value, index) => {
    return (
      <div className="comment-main-container" id={value.id} key={index}>
        <p className="comment-main-container__username third-title">{value.name}</p>
        <p className="comment-main-container__content main-text">{value.content}</p>
    </div>
    )
  })}
  </>
  )
}
