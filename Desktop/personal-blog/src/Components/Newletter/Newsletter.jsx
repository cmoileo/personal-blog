import Reveal from 'react-reveal/Reveal';

export default function Newsletter() {
  
  return (
    <Reveal>
    <div className="newsletter-container">
        <h1 className="main-title">Newsletter</h1>
     <div className="newsletter-container__texts">
     <div className="newsletter-container__left">
            <p className="main-text">
                Are you passionate about programming and always looking for ways to
                learn more and stay up-to-date with the latest developments in the field? <br /><br />
                If so, our programming blog newsletter is the perfect fit for you!  <br /><br />
                With our newsletter, you'll receive regular updates on the hottest topics in the world
                of programming, as well as exclusive access to content that you won't find anywhere else.</p>
        </div>
        <div className="newsletter-right">
            <p className="main-text">
                Plus, our team of expert writers and industry professionals curate each edition to
                ensure that you're only getting the most valuable and relevant information. <br /> <br />
                Don't miss out - sign up for our newsletter today and take your programming knowledge to the next level!</p>
            <form className="newsletter-cta">
                <input type="email" placeholder="Enter your email" className="newsletter-cta__input" />
                <button className="newsletter-cta__button" onClick={(e) => e.preventDefault(e)}>Submit</button>
            </form>
        </div>
     </div>
    </div>
    </Reveal>
  )
}
