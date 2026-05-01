import { Component } from "react";
import { Dropdown } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <main className="bg-black text-white">
        <div className="container-fluid pt-3">
          <div className="row w-100">
            <div className="col-0 col-md-2 col-lg-4"></div>
            <div className="col-12 col-md-7 col-lg-5">
              <h1 className="title h1 display-5 fw-semibold text-start w-100 text-white border-bottom border-1 border-secondary">
                Edit Profile
              </h1>
              <div className="row mt-3 flex-column flex-md-row align-items-center align-items-md-start g-3">
                <div className="col-3 flex-column justify-content-start">
                  <div id="avatar-container" className="position-relative">
                    <img
                      src="./public/avatar.png"
                      alt="avatar"
                      className="img-fluid"
                      type="button"
                    />
                    <i className="fas fa-edit position-absolute bottom-0 start-0 text-white fs-4 mb-2 ms-2"></i>
                  </div>
                </div>
                <div className="col-9 d-flex flex-column pb-3">
                  <div className="border-bottom border-1 border-secondary pb-3">
                    <p className="w-75 bg-secondary text-white ps-2 py-1">
                      Strive Student
                    </p>
                    <p className="mt-2 text-white mb-1 fs-5">Language:</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn rounded-0 bg-black border-white text-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        English
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="bg-dark">
                        <Dropdown.Item className="text-white text-bg-dark">
                          English
                        </Dropdown.Item>
                        <Dropdown.Item className="text-white text-bg-dark">
                          Italiano
                        </Dropdown.Item>
                        <Dropdown.Item className="text-white text-bg-dark">
                          Español
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="border-bottom border-1 border-secondary py-3">
                    <p className="w-50 text-white fs-5">Maturity Settings:</p>
                    <p className="text-white px-3 py-2 bg-dark w-auto d-inline-block fw-bold">
                      ALL MATURITY RATINGS
                    </p>
                    <p className="text-white w-100 d-inline-block">
                      Show titles of all
                      <span className="fw-bold">maturity ratings</span> for this
                      profile.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-0 w-25"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="border-bottom border-1 border-secondary py-3">
                    <p className="w-50 text-white fs-5">Autoplay Controls</p>
                    <div className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="form-check-input rounded-0 bg-black me-2 p-2 text-white shadow-none border-white fs-3"
                        id="autoplay-next-ep-checkbox"
                      />
                      <label
                        className="text-white"
                        htmlFor="autoplay-next-ep-checkbox"
                      >
                        Autoplay next episode in a series on all devices.
                      </label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="form-check-input rounded-0 bg-black me-2 p-2 text-white shadow-none border-white fs-3"
                        id="autoplay-next-ep-checkbox"
                      />
                      <label
                        className="text-white"
                        htmlFor="autoplay-next-ep-checkbox"
                      >
                        Autoplay next episode in a series on all devices.
                      </label>
                    </div>
                  </div>
                  <div className="py-3 justify-content-center flex-column flex-md-row gap-2 gap-lg-1 row">
                    <div className="col-12 col-md-auto d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-secondary bg-light text-black btn-outline-light rounded-0 fw-bold px-3"
                      >
                        SAVE
                      </button>
                    </div>
                    <div className="col-12 col-md-auto d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-secondary bg-black text-secondary btn-outline-secondary rounded-0 px-3"
                      >
                        CANCEL
                      </button>
                    </div>
                    <div className="col-12 col-md-auto d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-secondary bg-black text-secondary btn-outline-secondary rounded-0 px-3"
                      >
                        DELETE PROFILE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-0 col-md-3 col-lg-3"></div>
          </div>
        </div>
      </main>
    );
  }
}

export default Profile;
