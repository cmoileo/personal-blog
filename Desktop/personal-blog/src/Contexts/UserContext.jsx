import { createContext, useState, useEffect } from "react";
import {auth} from "../Firebase/FirebaseConfig"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"

export const UserContext = createContext()

export function UserContextProvider(props) {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [currentUser, SetcurrentUser] = useState("")

    const signIn = (emailInput, passwordInput) => signInWithEmailAndPassword(auth, emailInput, passwordInput)

  return (
    <UserContext.Provider value={{emailInput, setEmailInput, passwordInput, setPasswordInput, signIn, currentUser, SetcurrentUser}}>
        {props.children}
    </UserContext.Provider>
  )
}
