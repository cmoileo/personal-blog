import { createContext, useState } from "react";
import {auth} from "../Firebase/FirebaseConfig"
import {
  signInWithEmailAndPassword
} from "firebase/auth"

export const UserContext = createContext()

export function UserContextProvider(props) {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const signIn = (emailInput, passwordInput) => signInWithEmailAndPassword(auth, emailInput, passwordInput)

  return (
    <UserContext.Provider value={{emailInput, setEmailInput, passwordInput, setPasswordInput, signIn}}>
        {props.children}
    </UserContext.Provider>
  )
}
