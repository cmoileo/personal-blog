import DeleteIcon from '../../assets/delete-icon.png'
import ModifyIcon from '../../assets/modify-icon.png'

export default function ArticlesList() {
  return (
    <div className="articles-list-container">
        <div className="articles-list-container__texts">
            <h3 className="third-title pointer"><i>How I created a chess subscription application</i></h3>
            <p className="main-text pointer"><i>12 july 2022</i></p>
        </div>
        <div className="articles-list-container__icons">
            <img src={ModifyIcon} className="pointer" />
            <img src={DeleteIcon} className="pointer" />
        </div>
    </div>
  )
}
