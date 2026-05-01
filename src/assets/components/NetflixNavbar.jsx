import { Component } from "react";
import { Dropdown } from "react-bootstrap";
class NetflixNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid p-0">
          <div className="row justify-content-between mx-0">
            <a
              className="navbar-brand col-4 col-sm-3 col-md-2 col-lg-1 m-0 p-0 ps-lg-2"
              href="www.netflix.com"
            >
              <img
                src="../public/netflix_logo.png"
                alt="netflix_logo"
                className="img-fluid"
              />
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div
              className="col-lg-11 ps-3 ps-lg-0 d-flex align-items-center justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold text-white" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    My List
                  </a>
                </li>
              </ul>
              <div className="row align-items-start align-items-lg-center pe-4 w-25 w-lg-25 justify-content-end px-lg-0 text-lg-center flex-column flex-lg-row g-3 g-lg-0 text-white flex-nowrap">
                <i className="fas fa-search col-6 col-lg-2"></i>
                <p className="fw-bold mb-0 col-6 col-lg-2">KIDS</p>
                <i className="fas fa-bell col-6 col-lg-2"></i>
                <Dropdown className="dropdown col-6 col-lg-2 p-0">
                  <Dropdown.Toggle
                    className="dropdown-toggle p-0 border-0 w-100 w-lg-50 pe-4 bg-black"
                    id="dropdown-basic"
                  >
                    <img
                      src="../public/avatar.png"
                      alt="avatar"
                      className="w-100"
                      style={{ minWidth: "30px" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Ciaone</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NetflixNavbar;
