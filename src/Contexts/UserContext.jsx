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

    const [data, setData] = useState([])

    async function getCollection() {
      const q = query(collection(db, "Articles"));
      const docsSnap = await getDocs(q)
      let i = 0
      docsSnap.forEach(doc => { i++})
  
      const docRef = doc(db, "Articles", `${i}`);
  
      setData((await getDoc(docRef)).data())
    }
  
    useEffect(() => {
      getCollection()
    }, []);

  return (
    <UserContext.Provider value={{emailInput, setEmailInput, passwordInput, setPasswordInput, signIn, currentUser, SetcurrentUser, data}}>
        {props.children}
    </UserContext.Provider>
  )
}
