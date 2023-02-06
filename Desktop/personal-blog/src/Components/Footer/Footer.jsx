import Navbar from "../Navbar/Navbar"

export default function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-container__navbar">
             <Navbar />
             <div className="footer-container__navbar__copyrights">
                <h3 className="fourth-title">Léo Fezard - Frontend Developper</h3>
                <h3 className="fourth-title">2023 - No rights reserved</h3>
             </div>
        </div>
    </div>
  )
}
