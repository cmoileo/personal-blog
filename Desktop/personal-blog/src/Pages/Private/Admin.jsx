import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import ArticlesList from './ArticlesList'

export default function Admin() {
  return (
    <div className="main-container">
      <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
      <Navbar />
      <div className="admin-container">
        <h2 className="second-title admin-container__title">
          Published Articles
        </h2>
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <button className="admin-container__button">Write new article</button>
      </div>
      <Footer />
    </div>
  )
}
