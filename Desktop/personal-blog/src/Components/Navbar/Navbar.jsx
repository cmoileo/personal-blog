import React from 'react'

export default function Navbar() {
  return (
    <>
    <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
      <div className="navbar-container">
      <div className="navbar-container__left">
        <h3 className='third-title pointer'>About Me</h3>
        <h3 className='third-title pointer'>Articles</h3>
      </div>
      <div className="navbar-right">
        <h3 className='third-title pointer'>Log In</h3>
      </div>
    </div>
    </>
  )
}
