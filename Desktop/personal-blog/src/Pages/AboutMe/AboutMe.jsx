import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Myself from '../../Components/Myself/Myself'
import ArticlePreview from '../../Components/Latests/ArticlePreview'
import Newsletter from '../../Components/Newletter/Newsletter'

export default function AboutMe() {
  return (
    <div className="main-container">
      <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
      <Navbar />
      <Myself />
      <div className="secondary-latest-articles" style={{marginBottom: "75px"}}>
       <ArticlePreview />
       <ArticlePreview />
       <ArticlePreview />
      </div>
    <Newsletter />
    <Footer />
</div>
  )
}
