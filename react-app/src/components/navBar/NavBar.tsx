import {useState} from 'react';
import ModalBase from '../core/modalBase/ModalBase';

function NavBar({page} : {page: string}) {
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
              <a className={`nav-link ${returnActiveIfCurrent("home")}`} href="/">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${returnActiveIfCurrent("about")}`} href="about">About Us</a>
            </li>
            <li className="nav-item mx-3 dropdown">
              <a className={`nav-link dropdown-toggle ${returnActiveIfCurrent("rush")}`}href="rush" id="rushDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rush
              </a>
              <ul className="dropdown-menu" aria-labelledby="rushDropdown">
                <li><a className="dropdown-item" href="rush#apply">Apply</a></li>
                <li><a className="dropdown-item" href="rush#events">Events</a></li>
                <li><a className="dropdown-item" href="rush#faq">FAQ</a></li>
              </ul>
            </li>
            {/* Uncomment this area when there are workshops */}
            <li className="nav-item mx-3 dropdown">
              <a className={`nav-link dropdown-toggle ${returnActiveIfCurrent("workshops")}`} href="workshops" id="workshopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Workshops
              </a>
              <ul className="dropdown-menu" aria-labelledby="workshopDropdown">
                <li><a className="dropdown-item" href="workshop#rsvp">RSVP</a></li>
                <li><a className="dropdown-item" href="workshop#events">Events</a></li>
              </ul>
            </li>
            <li className="nav-item mx-3 dropdown">
              <a className={`nav-link dropdown-toggle ${returnActiveIfCurrent("members")}`} href="members" id="membersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Members
              </a>
              <ul className="dropdown-menu" aria-labelledby="membersDropdown">
                <li><a className="dropdown-item" href="members#eboard">E-Board</a></li>
                <li><a className="dropdown-item" href="members#actives">Actives</a></li>
                <li><a className="dropdown-item" href="members#alumni">Alumni</a></li>
              </ul>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${returnActiveIfCurrent("contact")}`} href="contact">Contact Us</a>
            </li>
            <li className="nav-item mx-3" onClick={() => {setSignInOpen(true)}}
              style={hoverStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
                <a className="nav-link" >Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
export default NavBar;
