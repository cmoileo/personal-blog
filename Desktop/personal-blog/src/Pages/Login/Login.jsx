import Navbar from '../../Components/Navbar/Navbar'
import { UserContext } from '../../Contexts/UserContext'
import { useContext, useRef } from 'react'
import {app} from '../../Firebase/FirebaseConfig';

export default function Login() {
  const {emailInput, setEmailInput, passwordInput, setPasswordInput, signIn}=useContext(UserContext)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const handleChange = () => {
   setEmailInput(emailInputRef.current.value)
   setPasswordInput(passwordInputRef.current.value)
  } 

  const handleSignIn = async (e) => {
    e.preventDefault()
   const cred = await signIn(
    emailInput, passwordInput
    );
  };

  return (
    <div className="main-container">
         <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
         <Navbar />
         <div className="login-container">
            <h2 className="second-title">
                Log In
            </h2>
            <form className='login-container__form'>
                <input ref={emailInputRef} onChange={handleChange} type="email" className="login-container__email" placeholder='Your email'/>
                <input ref={passwordInputRef} onChange={handleChange} type="password" className="login-password" placeholder='Your password'/>
                <button onClick={(e) => handleSignIn(e)} className="login-container-button">Connect</button>
            </form>
         </div>
    </div>
  )
}
