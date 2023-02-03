import Navbar from "../../Components/Navbar/Navbar"
import Latests from "../../Components/Latests/Latests"
import Newsletter from "../../Components/Newletter/Newsletter"
import Footer from "../../Components/Footer/Footer"

export default function Articles() {
  return (
    <div className="main-container">
          <h1 className='second-title blog-title pointer'>Léo's Blog</h1>
          <Navbar />
          <Latests />
          <Newsletter />
          <Footer />
    </div>
  )
}
