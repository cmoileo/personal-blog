import { createContext, useState, useEffect } from "react";
import {auth} from "../Firebase/FirebaseConfig"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"
import {doc} from 'firebase/firestore'
import { collection, query, getDocs, getDoc } from "firebase/firestore";
import {db} from "../Firebase/FirebaseConfig"

export const UserContext = createContext()

export function UserContextProvider(props) {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [currentUser, SetcurrentUser] = useState("")

    const signIn = (emailInput, passwordInput) => signInWithEmailAndPassword(auth, emailInput, passwordInput)

    const [articlesNumber, setArticlesNumber] = useState(-1)
    const [collectionData, setCollectionData] = useState([])

    async function getCollection() {
      const q = query(collection(db, "Articles"));
      const docsSnap = await getDocs(q)
      let i = -1
      docsSnap.forEach(doc => { i++, setCollectionData(oldArray => [...oldArray, doc.data()]); setArticlesNumber(i)})
    }
  
    useEffect(() => {
      getCollection()
    }, []);

  return (
    <UserContext.Provider value={{emailInput, setEmailInput, passwordInput, setPasswordInput, signIn, currentUser, SetcurrentUser, collectionData, setCollectionData, articlesNumber}}>
        {props.children}
    </UserContext.Provider>
  )
}
