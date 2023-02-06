import SecondaryIllustration from "../../assets/second-illustration.png"
import Clock from "../../assets/clock.svg"
import Fade from 'react-reveal/Fade';

export default function ArticlePreview() {
  return (
  <Fade right>
    <div className="article-preview-container">
        <img src={SecondaryIllustration} alt="" />
        <div className="article-preview-container__texts">
            <h4 className="fourth-title article-preview-container__texts__title">Javascript TDD with VITE and NextJS</h4>
            <div className="article-preview-container__texts__tags">
                <p>#javascript</p>
                <p>#nextjs</p>
                <p>#stripe</p>
            </div>
            <p className="main-latest-article-container__right__text-preview main-text article-preview-container__texts__preview-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh.</p>
            <div className="article-preview-container__texts__metrics">
                     <img src={Clock} alt="" />
                     <p className="estimated-time main-text">5-7 mins read</p>
            </div>
        </div>
    </div>
  </Fade>
  )
}
