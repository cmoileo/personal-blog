import Navbar from '../../Components/Navbar/Navbar'

export default function Login() {
  return (
    <div className="main-container">
         <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
         <Navbar />
         <div className="login-container">
            <h2 className="second-title">
                Log In
            </h2>
            <form className='login-container__form'>
                <input type="email" className="login-container__email" placeholder='Your email'/>
                <input type="password" className="login-password" placeholder='Your password'/>
                <button onClick={(e) => e.preventDefault(e)} className="login-container-button">Connect</button>
            </form>
         </div>
    </div>
  )
}
