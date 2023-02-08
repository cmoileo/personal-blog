import Footer from "../../Components/Footer/Footer";
import Latests from "../../Components/Latests/Latests";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newletter/Newsletter";
import MainIllustration from '../../assets/main-illustration.png'
import Clock from '../../assets/clock.svg'
import LeaveComments from "../../Components/Comments/LeaveComments";
import CommentsList from "../../Components/Comments/CommentsList";
import Slide from 'react-reveal/Slide';
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

export default function Article({navBarAnimation, setNavBarAnimation}) {
  const {collectionData} = useContext(UserContext)

  let articleTarget = localStorage.getItem('articleTarget')

  return (
    <div className="main-container">
        <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
        <Navbar navBarAnimation={navBarAnimation} setNavBarAnimation={setNavBarAnimation}/>
      <Slide right>
        <div className="article-main-container">
            <img src={collectionData[articleTarget]?.image} className="article-main-container__illustration" />
            <div className="article-main-container__header">
              <h2 className="second-title">{collectionData[articleTarget]?.name}</h2>
              <div className="article-main-container__header__infos">
                <div className="main-latest-article-container__right__tags">
                  <p>{collectionData[articleTarget]?.tags}</p>
                </div>
                <div className="article-main-container__header__infos__time">
                  <p className="main-text">{collectionData[articleTarget]?.date}</p>
                  <img src={Clock} alt="" />
                  <p className="main-text">5-7 minutes read</p>
                </div>
              </div>
              <p className="main-text article-main-container__text-content">
              {collectionData[articleTarget]?.content}
              </p>
            </div>
            <LeaveComments />
            <CommentsList />
        </div>
        </Slide>

        <Latests />
        <Newsletter />
        <Footer />
     </div>
  )
}
