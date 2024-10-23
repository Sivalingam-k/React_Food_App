import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
       
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="text-uppercase">About Us</h5>
          <p>
            We are a company dedicated to providing the best services to our customers. Our mission is to exceed your expectations and deliver outstanding results.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="text-uppercase">Contact Us</h5>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>

    <div className="text-center p-3 bg-dark text-white">
  <h6>Follow Us</h6>
  <a href="https://facebook.com" className="text-white me-3">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://twitter.com" className="text-white me-3">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://instagram.com" className="text-white me-3">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://linkedin.com" className="text-white me-3">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
</div>

    <div className="text-center p-3 bg-light">
      <span>&copy; {new Date().getFullYear()} Food_App. All rights reserved.</span>
    </div>
    </footer>
  )
}

export default Footer
