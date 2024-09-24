import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='row'>
          <Col 
          lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col 
          lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 01712345678</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6" className='footer_col'>
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <FontAwesomeIcon icon={faPaperPlane}  className='red'/>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} className='blue' />
                </Link>
              </span>
              <span>
                <Link to="https://github.com">
                  <FontAwesomeIcon icon={faGithub} className='blue' />
                </Link>
              </span>
              <span>
                <Link to="https://www.youtube.com">
                  <FontAwesomeIcon icon={faYoutube} className='blue' />
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} className='blue' />
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;