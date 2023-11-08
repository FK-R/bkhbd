
import logo from "../../public/vite.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons"
const Navbar = () => {
  return (
<>

<div className="container">
<div className="d-flex justify-content-between py-2 bg-s">
  <div className='d-flex gap-2'>
  <p>
 <FontAwesomeIcon icon={faEnvelope} />
 {""} fkr#@fkr.com
</p>

<p><FontAwesomeIcon icon={faPhone} />{""} +992992929921
</p>
  </div>


  <div className='d-flex gap-2'>
  <p>
 <FontAwesomeIcon icon={faFacebook} />

</p>

<p><FontAwesomeIcon icon={faTwitter} />
</p>
<p><FontAwesomeIcon icon={faYoutube} />
</p>
  </div>
</div>
</div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">  <img width={40} height={40} className="my-3" src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       About Us
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Student Panel
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Members Panel
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Association Program
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true" href="#">Contact Us</a>
        </li>
      </ul>
      <div className="d-flex" role="search">

        <button className="btn btn-outline-secondary" type="submit">Scholarship Result</button>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar