import {useState} from 'react';
import ModalBase from '../core/modalBase/ModalBase';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../contexts/AuthenticationContext';

function NavBar({page} : {page: string}) {
  const {user, handleLogin, handleLogout} = useAuthentication();
    const returnActiveIfCurrent = (currentPage: string) => {
        return page === currentPage ? "active" : "";
    }
    const [isHovered, setIsHovered] = useState(false);
    const hoverStyle = {
      cursor: isHovered ? 'pointer' : 'default',
    };

    const [signInOpen, setSignInOpen] = useState(false);
  return (
    <>
    <ModalBase open={signInOpen} handleClose={() => setSignInOpen(false)}>
      <h1 style={{textAlign: "center"}}>Member portal in progress</h1>
      </ModalBase>
    <nav className="navbar navbar-expand-lg shadow-lg sticky-top">
      <div className="container-fluid mx-md-5">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <Link className={`nav-link ${returnActiveIfCurrent("home")}`} to="/">Home</Link>
            </li>
            <li className="nav-item mx-3">
            <Link className={`nav-link ${returnActiveIfCurrent("about")}`} to="/about">About</Link>
              {/* <a className={`nav-link ${returnActiveIfCurrent("about")}`} href="about">About Us</a> */}
            </li>
            <li className="nav-item mx-3 dropdown">
              
              <Link onClick={() => {window.location.href = "/#/rush"}} className={`nav-link dropdown-toggle ${returnActiveIfCurrent("rush")}`}  to="/rush" id="rushDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rush
              </Link>
              <ul className="dropdown-menu" aria-labelledby="rushDropdown">
                <li><Link className="dropdown-item" to="/rush#apply">Apply</Link></li>
                <li><Link className="dropdown-item" to="/rush#events">Events</Link></li>
                <li><Link className="dropdown-item" to="/rush#faq">FAQ</Link></li>
              </ul>
            </li>
            {/* Uncomment this area when there are workshops */}
            <li className="nav-item mx-3 dropdown">
              <Link onClick={() => {window.location.href = "/#/workshops"}} className={`nav-link dropdown-toggle ${returnActiveIfCurrent("workshops")}`} to="/workshops" id="workshopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Workshops
              </Link>
              <ul className="dropdown-menu" aria-labelledby="workshopDropdown">
                <li><Link className="dropdown-item" to="/workshops#rsvp">RSVP</Link></li>
                <li><Link className="dropdown-item" to="/workshops#events">Events</Link></li>
              </ul>
            </li>
            <li className="nav-item mx-3 dropdown">
              <Link onClick={() => {window.location.href = "/#/members"}} className={`nav-link dropdown-toggle ${returnActiveIfCurrent("members")}`} to="/members" id="membersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Members
              </Link>
              <ul className="dropdown-menu" aria-labelledby="membersDropdown">
                <li><Link className="dropdown-item" to="/members#eboard">E-Board</Link></li>
                <li><Link className="dropdown-item" to="/members#actives">Actives</Link></li>
                <li><Link className="dropdown-item" to="/members#alumni">Alumni</Link></li>
              </ul>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${returnActiveIfCurrent("contact")}`} to="/contact">Contact Us</Link>
            </li>
            {
              user && <li className="nav-item mx-3">
              <Link className={`nav-link ${returnActiveIfCurrent("alumni-database")}`} to="/alumni-database">Alumni Database</Link>
            </li>
            }
            {
              user ? <li className="nav-item mx-3" onClick={handleLogout}
              style={hoverStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
                <a className="nav-link" >Sign Out</a>
            </li>
            : <li className="nav-item mx-3" onClick={handleLogin}
            style={hoverStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
              <a className="nav-link" >Sign In</a>
          </li>
            }
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
export default NavBar;
