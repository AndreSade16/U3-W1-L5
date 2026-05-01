import { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <main>
        <div className="container-fluid mt-5">
          <div className="row w-100">
            <div className="col-0 col-md-1 col-lg-2"></div>
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="fw-normal text-start w-100 text-black border-bottom border-1 border-secondary pb-2">
                Account
              </h1>
              <div
                id="first-row"
                className="row pt-2 flex-column flex-md-row align-items-center align-items-md-start g-3 border-bottom border-1 border-secondary"
              >
                <div className="col-4 flex-column justify-content-start">
                  <div id="left-container" className="position-relative">
                    <h3 className="fs-5 text-body-tertiary">
                      MEMBERSHIP & BILLING
                    </h3>
                    <button
                      type="button"
                      className="btn bg-dark-subtle rounded-0 shadow-sm text-black"
                    >
                      Cancel Membership
                    </button>
                  </div>
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="border-bottom border-1 border-secondary pb-3 d-flex justify-content-between flex-column flex-sm-row">
                    <div className="d-flex flex-column">
                      <p className="text-black mb-1">student@strive.school</p>
                      <p className="text-secondary mb-1">Password: *********</p>
                      <p className="text-secondary mb-1">Phone: 321 123 4567</p>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Change account email
                      </a>
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Change password
                      </a>
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Change phone number
                      </a>
                    </div>
                  </div>
                  <div className="border-bottom border-1 border-secondary pb-3 d-flex justify-content-between flex-column flex-sm-row pt-3">
                    <div className="d-flex flex-column">
                      <p className="text-dark mb-1 fst-italic fw-bold text-center text-sm-start">
                        <i className="fab fa-paypal"></i> PayPal
                      </p>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Update payment info
                      </a>
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Billing details
                      </a>
                    </div>
                  </div>
                  <div className="pb-3 d-flex justify-content-between pt-3">
                    <div className="d-flex flex-column"></div>
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Redeem gift card or promo code
                      </a>
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Where to buy gift cards
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="second-row"
                className="row pt-3 flex-column flex-md-row align-items-center align-items-md-start g-3 border-bottom border-1 border-secondary"
              >
                <div className="col-4 flex-column justify-content-start">
                  <div id="left-container" className="position-relative">
                    <h3 className="fs-5 text-body-tertiary">PLAN DETAILS</h3>
                  </div>
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="pb-2 d-flex flex-column flex-sm-row justify-content-between">
                    <div className="d-flex flex-column">
                      <p className="text-dark fw-semibold mb-1 text-center text-sm-start">
                        Premium
                        <span className="border border-2 border-dark rounded-2 px-1 text-nowrap">
                          ULTRA HD
                        </span>
                      </p>
                    </div>
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-decoration-none text-center text-sm-end"
                      >
                        Change plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="third-row"
                className="row pt-3 flex-column flex-md-row align-items-center align-items-md-start g-3 border-bottom border-1 border-secondary"
              >
                <div className="col-4 flex-column justify-content-start">
                  <div id="left-container" className="position-relative">
                    <h3 className="fs-5 text-body-tertiary">SETTINGS</h3>
                  </div>
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="pb-2 d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <a href="#" className="text-decoration-none text-start">
                        Parental control
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Test participation
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Manage download devices
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Activate a device
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Recent device streaming activity
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Sign out of all devices
                      </a>
                    </div>
                    <div className="d-flex flex-column"></div>
                  </div>
                </div>
              </div>
              <div
                id="third-row"
                className="row pt-3 flex-column flex-md-row align-items-center align-items-md-start g-3 border-bottom border-1 border-secondary"
              >
                <div className="col-4 flex-column justify-content-start">
                  <div id="left-container" className="position-relative">
                    <h3 className="fs-5 text-body-tertiary">MY PROFILE</h3>
                  </div>
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="pb-2 d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <p className="text-dark fw-semibold">
                        <img
                          src="./public/avatar.png"
                          alt="avatar"
                          style={{ width: "2rem" }}
                        />
                        Strive student
                      </p>
                    </div>
                    <div className="d-flex flex-column g-1">
                      <a href="#" className="text-decoration-none text-end">
                        Manage profiles
                      </a>
                      <a href="#" className="text-decoration-none text-end">
                        Add profile email
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-sm-5 flex-column flex-sm-row pb-4">
                    <div className="text-start d-flex flex-column me-lg-5">
                      <a href="#" className="text-decoration-none text-start">
                        Language
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Playback settings
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Subtitle appearance
                      </a>
                    </div>
                    <div className="text-start d-flex flex-column">
                      <a href="#" className="text-decoration-none text-start">
                        Viewing activity
                      </a>
                      <a href="#" className="text-decoration-none text-start">
                        Ratings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-0 col-md-1 col-lg-2"></div>
          </div>
        </div>
      </main>
    );
  }
}

export default Settings;
