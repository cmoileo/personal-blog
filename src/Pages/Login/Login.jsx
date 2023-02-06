import Navbar from '../../Components/Navbar/Navbar'
import { UserContext } from '../../Contexts/UserContext'
import { useContext, useRef } from 'react'
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login({navBarAnimation, setNavBarAnimation}) {
  const {emailInput, setEmailInput, passwordInput, setPasswordInput, signIn, currentUser, SetcurrentUser}=useContext(UserContext)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const navigate = useNavigate();

  const handleChange = () => {
   setEmailInput(emailInputRef.current.value)
   setPasswordInput(passwordInputRef.current.value)
  } 

  const handleSignIn = async (e) => {
    e.preventDefault();
    const cred = await signIn(emailInput, passwordInput);
    SetcurrentUser(await getAuth().currentUser.uid);
    await navigate("/admin")
  };

  return (
    <div className="main-container">
         <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
         <Navbar navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>
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
