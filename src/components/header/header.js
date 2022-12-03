import "./header.css";
import logo from '../../assets/logo.png'
//import local images before using them
export default function Header() {
  return (
    <header className="header">
      <nav className="navContainer">
        <a href="index.html" className="navLogo"> 
            <img src={logo} alt="logo" />
         </a>
        <div className="navMenu">
          <ul className="navListGrid">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="portfolio" className="nav_link">
                Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                Contact
              </a>
            </li>
          </ul>
          <i className="nav_close"></i>
        </div>
        <div className="nav_toggle"></div>
      </nav>
    </header>
  );
}
