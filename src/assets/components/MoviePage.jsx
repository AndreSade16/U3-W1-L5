import { Component } from "react";
import { Container, Spinner } from "react-bootstrap";

class MoviePage extends Component {
  state = {
    loading: true,
    fetched: {},
  };

  componentDidMount() {
    fetch("https://omdbapi.com/?i=" + this.props.movieId + "&apikey=e17bd516")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error parsing movie data: ", res.status);
        }
      })
      .then((data) => this.setState({ fetched: data, loading: false }))
      .catch((err) => {
        this.setState({ ...this.state, loading: false });
        alert("Error fetching data: ", err);
      });
  }

  render() {
    return (
      <>
        <Container
          fluid={true}
          className="d-flex justify-content-center bg-black py-5"
        >
          {this.state.loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : this.state.fetched.Title ? (
            <div className="d-flex flex-column flex-md-row gap-3 text-white">
              <img
                src={this.state.fetched.Poster}
                alt={this.state.fetched.title + " - poster"}
              />
              <div id="movie-text" className="d-flex flex-column">
                <h2 className="text-center">{this.state.fetched.Title}</h2>
                <p>
                  <span className="fw-bold">Year:</span>{" "}
                  {this.state.fetched.Year}
                </p>
                <p>
                  <span className="fw-bold">Rated:</span>{" "}
                  {this.state.fetched.Rated}
                </p>
                <p>
                  <span className="fw-bold">Runtime:</span>{" "}
                  {this.state.fetched.Runtime}
                </p>
                <p>
                  <span className="fw-bold">Genre:</span>{" "}
                  {this.state.fetched.Genre}
                </p>
                <p>
                  <span className="fw-bold">Director:</span>{" "}
                  {this.state.fetched.Director}
                </p>
                <p>
                  <span className="fw-bold">Actors:</span>{" "}
                  {this.state.fetched.Actors}
                </p>
                <p>
                  <span className="fw-bold">Plot:</span>{" "}
                  {this.state.fetched.Plot}
                </p>
                <p>
                  <span className="fw-bold">Language:</span>{" "}
                  {this.state.fetched.Language}
                </p>
                <p>
                  <span className="fw-bold">Country:</span>{" "}
                  {this.state.fetched.Country}
                </p>
              </div>
            </div>
          ) : (
            <p>Error fetching data...</p>
          )}
        </Container>
      </>
    );
  }
}

export default MoviePage;
