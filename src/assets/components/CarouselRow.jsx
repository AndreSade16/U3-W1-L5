import { Component } from "react";
import { Spinner } from "react-bootstrap";
import "./CarouselRow.css";

class CarouselRow extends Component {
  state = {
    fetched: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    fetch("https://omdbapi.com/?s=" + this.props.query + "&apikey=e17bd516")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error parsing response", res.status);
        }
      })
      .then((data) => {
        this.setState({ ...this.state, loading: false, fetched: data.Search });
      })
      .catch((err) => {
        alert("Error fetching data: ", err);
        this.setState({ ...this.state, error: true, loading: false });
      });
  }
  render() {
    return this.state.loading ? (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    ) : (
      <div className="carousel-row d-flex g-0 ">
        {this.state.fetched.map((movie) => {
          return (
            <div className="carousel-div flex-shrink-0" key={movie.imdbID}>
              <img className="w-100 " src={movie.Poster} alt={movie.Title} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CarouselRow;
