import { Component } from "react";

class NetflixFooter extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-secondary bg-black pt-2">
        <div id="socials-icons-row" className="row w-75 text-secondary mx-0">
          <div className="col-12 col-md-6 col-lg-4 d-flex gap-2 fs-3 justify-content-between">
            <a href="#" className="text-secondary">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div id="links-row" className="row mt-3 w-75 mx-0">
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <a href="#" className="text-secondary text-decoration-none">
              <p>Audio and Subtitles</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Media Center</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Privacy</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Contact Us</p>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <a href="#" className="text-secondary text-decoration-none">
              <p>Audio Descriptions</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Investor Relations</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Legal Notices</p>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <a href="#" className="text-secondary text-decoration-none">
              <p>Help Center</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Jobs</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Cookie Preferences</p>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <a href="#" className="text-secondary text-decoration-none">
              <p>Gift Cards</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Terms of Use</p>
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              <p>Corporate Information</p>
            </a>
          </div>
        </div>
        <div id="btn-row" className="row w-75 mt-3 mx-0">
          <div className="col-12 col-md-6 col-lg-3">
            <button
              type="button"
              className="btn btn-outline-secondary rounded-0"
            >
              Service Code
            </button>
          </div>
        </div>
        <div id="commercial-row" className="row w-75 mt-3 text-secondary mx-0">
          <div className="col-12 col-md-6">
            <p>© 1997-{new Date().getFullYear()} Netflix, Inc. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NetflixFooter;
