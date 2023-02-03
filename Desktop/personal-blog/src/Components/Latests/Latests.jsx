import ArticlePreview from "./ArticlePreview";
import MainLatest from "./MainLatest";

export default function Latests() {
  return (
    <div className="latest-articles-container">
      <div className="main-lastest-article">
        <h1 className="main-title">Latests</h1>
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
