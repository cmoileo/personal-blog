import MainIllustration from '../../assets/main-illustration.png'
import Clock from "../../assets/clock.svg"

export default function MainLatest() {
  return (
    <div className="main-latest-article-container">
        <div className="main-latest-article-container__left">
          <img className='main-illustration' src={MainIllustration} alt="" />
        </div>
        <div className="main-latest-article-container__right">
            <h3 className="second-title">
            How I created a chess subscription<br />application.
            </h3>
            <p className="fourth-title main-latest-article-container__article-date">12 July 2022</p>
            <div className="main-latest-article-container__right__tags">
                <p>#javascript</p>
                <p>#nextjs</p>
                <p>#stripe</p>
            </div>
           <p className="main-latest-article-container__right__text-preview main-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. <br /> Phasellus felis justo, convallis eget eros at, consequat luctus felis. Nunc pharetra orci tellus. Nulla facilisi.</p>
           <div className="main-latest-article-container__right__estimated-time">
            <img src={Clock} alt="" />
            <p className="estimated-time main-text">5-7 mins read</p>
           </div>
        </div>
    </div>
  )
}
