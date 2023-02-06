import ArticlePreview from "./ArticlePreview";
import MainLatest from "./MainLatest";
import Fade from 'react-reveal/Fade';

export default function Latests() {
  return (
    <div className="latest-articles-container">
      <div className="main-lastest-article">
        <Fade right>
          <h1 className="main-title">Latests</h1>
        </Fade>
        <MainLatest />
        </div>
        <div className="secondary-latest-articles">
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
        </div>
     </div>
  )
}
