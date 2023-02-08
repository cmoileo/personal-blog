import ArticlePreview from "./ArticlePreview";
import MainLatest from "./MainLatest";
import Fade from 'react-reveal/Fade';
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

export default function Latests() {
  
  const handleClick = (e) => {
    localStorage.setItem('articleTarget', e.nativeEvent.path[1].id)
  }

  return (
    <div className="latest-articles-container">
      <div className="main-lastest-article">
        <Fade right>
          <h1 className="main-title">Latests</h1>
        </Fade>
        <MainLatest />
        </div>
        <Fade right>
        <div className="secondary-latest-articles" onClick={(e) =>  handleClick(e)}>
           <ArticlePreview />
        </div>
        </Fade>
     </div>
  )
}
