import { Link } from 'react-router-dom'
import './MainHeader.css'
function MainHeader() {
  return (
    <header id="main-header">
        <nav className="">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AboutUs">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/WhyUs">Why Us</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader