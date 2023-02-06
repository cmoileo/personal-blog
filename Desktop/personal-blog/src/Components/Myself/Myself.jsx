import Me from "../../assets/me.jpg"
import Fade from 'react-reveal/Fade';

export default function Myself() {
  return (
    <Fade left>
    <div className="myself-main-container">
        <h1 className="main-title myself-main-container__main-title">About Me</h1>
        <p className="main-text myself-main-container__main-text">
            Hi there! I'm the brains behind this technical programming blog, where I share my passion for all things JavaScript. <br /> 
            Whether you're a seasoned veteran or a total beginner, you'll find something to love on my blog. <br />
            I cover a wide range of topics, from the latest language features and frameworks, to tips and tricks for writing clean <br />
            and efficient code. <br /> <br />
            When I'm not coding, you can find me tinkering with new technologies, reading up on the latest trends, <br />
            or hiking in the great outdoors. I'm always on the lookout for new challenges and opportunities to learn and grow, <br />
            and I can't wait to share my journey with you. </p>
        <img src={Me} className="myself-main-container__pp" />
        <h1 className="main-title myself-main-container__main-title">THINGS I LIKE</h1>
        <div className="myself-main-container__hobbies">
            <p className="fourth-title">Working Out</p>
            <p className="fourth-title">Cooking</p>
            <p className="fourth-title">Hanging out</p>
            <p className="fourth-title">Coding</p>
            <p className="fourth-title">Musics</p>
        </div>
        <p className="main-text myself-main-container__main-text">
        As a full-stack developer, I was always on the lookout for the latest and greatest tools to help me <br />
        build killer web apps. After hours of research and countless experiments, I finally settled on using React, <br />
        TypeScript, and NextJS in my projects. With React, I was able to whip up user interfaces faster than a rat in a maze. <br />
        TypeScript, on the other hand, kept my code clean and error-free, like a freshly-mopped floor. <br /> <br />
        NextJS, meanwhile, allowed me to build blazing fast web apps that were as scalable as a rubber band. It was like having <br />
        a superpower that let me conquer any project that came my way. <br /><br />
        Overall, using React, TypeScript, and NextJS in my development projects made me feel like a superhero, ready to take on <br />
        any challenge and build the most amazing web apps the world has ever seen.
        </p>
        <h1 className="main-title myself-main-container__second-main-title">From the blog</h1>
    </div>
    </Fade>
  )
}
