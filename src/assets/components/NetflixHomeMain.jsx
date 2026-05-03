import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import CarouselRow from "./CarouselRow";

class NetflixHomeMain extends Component {
  render() {
    return (
      <main className="flex-grow-1 px-2 py-3 bg-black">
        <div className="container-fluid">
          <div className="row justify-content-between ps-2">
            <h2 className="text-white col-2 p-0">TV Shows</h2>
            <div className="d-flex flex-row col-lg-10 justify-content-start justify-content-between p-0 pe-2">
              <Dropdown className="col-2">
                <Dropdown.Toggle
                  className="btn btn-dark bg-black text-white fw-bold rounded-0 border-white"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-dark">
                  <Dropdown.Item className="text-white text-bg-dark">
                    Thriller
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white text-bg-dark">
                    Romcom
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white text-bg-dark">
                    Drama
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div id="side-menu" className="d-flex text-white col-2 w-auto">
                <div className="border border-1 border-white py-1 px-3 d-flex align-items-center">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="border border-1 border-white py-1 px-3 d-flex align-items-center">
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <h3 className="fs-4 text-white pb-2">Harry Potter</h3>
            <CarouselRow
              setPage={(value) => this.props.setPage(value)}
              query="harry-potter"
            />
          </div>
          <div className="row mt-4">
            <h3 className="fs-4 text-white pb-2">X-Men</h3>
            <CarouselRow
              setPage={(value) => this.props.setPage(value)}
              query="x-men"
            />
          </div>
          <div className="row mt-4">
            <h3 className="fs-4 text-white pb-2">Mission: Impossible</h3>
            <CarouselRow
              setPage={(value) => this.props.setPage(value)}
              query="mission-impossible"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default NetflixHomeMain;
