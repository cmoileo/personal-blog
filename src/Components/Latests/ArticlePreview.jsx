import Clock from "../../assets/clock.svg"
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

export default function ArticlePreview() {
  const {collectionData} = useContext(UserContext)

  return (
<>
  {collectionData.map((article, index) => {
          return (
            <div className="article-preview-container" id={index} key={index}>
             <img src={collectionData[index].image} alt="" />
             <div className="article-preview-container__texts">
                <h4 className="fourth-title article-preview-container__texts__title">{collectionData[index].name}</h4>
                <div className="article-preview-container__texts__tags">
                  <p>{collectionData[index].tags}</p>
                </div>
                <p className="main-latest-article-container__right__text-preview main-text article-preview-container__texts__preview-text">{collectionData[index].content?.substring(0, 100) + "..."}</p>
                <div className="article-preview-container__texts__metrics">
                         <img src={Clock} alt="" />
                         <p className="estimated-time main-text">5-7 mins read</p>
                </div>
            </div>
           </div>
          )
        })}

          </>
  )
}
