import Clock from "../../assets/clock.svg"
import Fade from 'react-reveal/Fade';
import { UserContext } from '../../Contexts/UserContext';
import { useContext } from 'react';

export default function MainLatest() {
  const {data}=useContext(UserContext)

  return (
  <Fade right>
    <div className="main-latest-article-container">
        <div className="main-latest-article-container__left">
          <img className='main-illustration' src={data.image} alt="" />
        </div>
        <div className="main-latest-article-container__right">
            <h3 className="second-title">
            {data.name}
            </h3>
            <p className="fourth-title main-latest-article-container__article-date">{data.date}</p>
            <div className="main-latest-article-container__right__tags">
            {data.tags?.split(",").map((tag, index) => {
          return (
              <p key={index}>{tag}</p>
          )
        })}
            </div>
           <p className="main-latest-article-container__right__text-preview main-text">{data.content?.substring(0, 150) + "..."}</p>
           <div className="main-latest-article-container__right__estimated-time">
            <img src={Clock} alt="" />
            <p className="estimated-time main-text">5-7 mins read</p>
           </div>
        </div>
    </div>
  </Fade>
  )
}
