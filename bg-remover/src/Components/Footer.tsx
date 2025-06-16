import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#"><img src={assets.logo} alt="" /></a>
        <p className="footer-top-copyright">Copyright @Prajwal K | All right reserved.</p>
      </div>
      <div className="footer-right">
          <a href="https://www.linkedin.com/in/prajwal-k-b26344173/" target="__blank" rel="noopener noreferrer">
          <div className="linkedin footer-icon">
          <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
        </div>
          </a>
        <div className="github footer-icon">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </div>
        <div className="X-twitter footer-icon">
          <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
        </div>
      </div>
      <p className="footer-bottom-copyright">Copyright @Prajwal K | All right reserved.</p>
    </footer>
  )
}

export default Footer