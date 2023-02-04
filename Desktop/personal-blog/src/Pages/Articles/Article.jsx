import Footer from "../../Components/Footer/Footer";
import Latests from "../../Components/Latests/Latests";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newletter/Newsletter";
import MainIllustration from '../../assets/main-illustration.png'
import Clock from '../../assets/clock.svg'
import LeaveComments from "../../Components/Comments/LeaveComments";
import CommentsList from "../../Components/Comments/CommentsList";

export default function Article() {
  return (
    <div className="main-container">
        <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
        <Navbar />
        <div className="article-main-container">
            <img src={MainIllustration} className="article-main-container__illustration" />
            <div className="article-main-container__header">
              <h2 className="second-title">Why TypeScript is the Better Choice over JavaScript</h2>
              <div className="article-main-container__header__infos">
                <div className="main-latest-article-container__right__tags">
                  <p>#javascript</p>
                  <p>#nextjs</p>
                  <p>#stripe</p>
                </div>
                <div className="article-main-container__header__infos__time">
                  <p className="main-text">12 July 2022</p>
                  <img src={Clock} alt="" />
                  <p className="main-text">5-7 minutes read</p>
                </div>
              </div>
              <p className="main-text article-main-container__text-content">
              As a developer, you want to write code that is not only functional, but also easy to maintain and extend. This is where TypeScript comes in. <br />
              While JavaScript is the most popular programming language in the world, TypeScript offers several advantages that make it a better choice for many projects. <br />
              First and foremost, TypeScript is a typed language, which means that variables have a specific type (such as string, number, or boolean) <br />
              and the compiler will check for type errors at compile time. This makes it easier to catch errors early on and prevents runtime exceptions, saving you time and frustration. <br /><br />
              In addition, TypeScript has a rich type system that allows you to define interfaces, classes, and other advanced types that make your code more organized and self-documenting. <br />
              This not only improves the readability of your code, but also makes it easier for other developers to understand and work with. <br /> <br />
              Another advantage of TypeScript is that it is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. <br />
              This means that you can gradually introduce TypeScript into your existing JavaScript codebase, and take advantage of its features as needed. <br />
              You can also use the TypeScript compiler to convert your TypeScript code into plain JavaScript that can run in any modern browser or runtime.
              In conclusion, while JavaScript will always have its place in the world of programming, TypeScript offers many compelling benefits that make it a better <br />
              choice for large and complex projects. With its strong typing, advanced type system, and seamless integration with JavaScript, TypeScript can help you write more maintainable and scalable code. <br />
              If you're not already using TypeScript, it's definitely worth considering for your next project.
              </p>
            </div>
            <LeaveComments />
            <CommentsList />
        </div>

        <Latests />
        <Newsletter />
        <Footer />
     </div>
  )
}
