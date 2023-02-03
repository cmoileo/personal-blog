import Footer from "../../Components/Footer/Footer";
import Latests from "../../Components/Latests/Latests";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newletter/Newsletter";
import MainIllustration from '../../assets/main-illustration.png'

export default function Article() {
  return (
    <div className="main-container">
        <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
        <Navbar />
        <div className="article-main-container">
            <img src={MainIllustration} className="article-main-container__illustration" />
        </div>
        <Latests />
        <Newsletter />
        <Footer />
     </div>
  )
}
