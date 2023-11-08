import { Link } from "react-router-dom"
import logo from "/vite.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
<>

<footer className="bg-light text-center text-lg-start">
  
  <div className="container py-5">

    <div className="row">

      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Bangladesh Kindergarten Association</h5>
  <img width={80} height={70} className="my-3" src={logo} alt="" />
        <p className=" fs-14">
          
            Welcome to the official website of the Bangladesh Kindergarten Association. Students are our future wealth and mighty. To give them proper education is our responsibility. If the students are well taught, they will be our property. They will bring us reputation and dignity. Otherwise, they will be the burden of society, As such; they will commit theft and deceit.
        </p>
      </div>
   
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Important Link</h5>
  <div className="d-flex flex-column fs-14">
  <a href="#">Bangladesh Bureau Of Educational Information And Statistics</a>
<a href="#">Directorate Of Secondary And Higher Education</a>
<a href="#">Dhaka – Education Board Bangladesh</a>
<a href="#">Technical – Education Board Bangladesh</a>
<a href="#">Bangladesh Madrasah Education Board</a>
<a href="#">Directorate Of Primary Education</a>
<a href="#">Education Board Bangladesh</a>
<a href="#">Bangladesh Govt. Portal</a>
<a href="#">Ministry Of Education</a>
<a href="#">E-Book</a>
  </div>


      </div>
    
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contacts</h5>

        <div className="fs-14">
<p>
 <FontAwesomeIcon icon={faEnvelope} />
 {""} fkr#@fkr.com
</p>

<p><FontAwesomeIcon icon={faPhone} />{""} +992992929921
</p>
        </div>


        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Follow Us</h5>

        <div className="fs-14 d-flex gap-2 align-items-center">
<p>
 <FontAwesomeIcon icon={faFacebook} />

</p>

<p><FontAwesomeIcon icon={faYoutube} />
</p>
        </div>
      </div>
      </div>
    </div>

  </div>



  <div className="text-center text-white fw-semibold p-3 bg-dark fs-12" >
  © 1984-2023. Bangladesh Kindergarten Association. All Rights Reserved.
Developed By {""}
          <a className="text-white fw-semibold" to="/">
         mPair Technologies Ltsd.
          </a>
        </div>

</footer>
</>
  )
}

export default Footer