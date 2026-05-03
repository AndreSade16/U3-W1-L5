import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Search extends Component {
  state = {
    loading: false,
    inputValue: "",
    fetched: {},
  };
  render() {
    return (
      <>
        <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-black py-5 flex-column">
          <input
            className="bg-dark text-white rounded-pill border-0 py-1 px-3 w-50"
            type="text"
            value={this.state.inputValue}
            onChange={(e) => {
              const value = e.target.value;
              this.setState({
                ...this.state,
                inputValue: value,
                loading: true,
              });

              if (value.length < 3) return;

              fetch("https://omdbapi.com/?s=" + value + "=&apikey=e17bd516")
                .then((res) => {
                  if (res.ok) {
                    return res.json();
                  } else {
                    throw new Error("Error parsing query data: ", res.status);
                  }
                })
                .then((data) => {
                  this.setState({ loading: false, fetched: data });
                })
                .catch((err) => {
                  alert("Error fetching data: ", err);
                  this.setState({ ...this.state, loading: false });
                });
            }}
          />
          {this.state.inputValue ? (
            <Container>
              <Row className="d-flex pt-4 justify-content-center g-3">
                {this.state.fetched.Search?.map((movie) => {
                  return (
                    <Col
                      key={movie.imdbId}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="d-flex justify-content-center"
                      type="button"
                      onClick={() => {
                        this.props.setPage({
                          currentPage: "movie",
                          clickedId: movie.imdbID,
                        });
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={movie.Poster}
                        alt={movie.Title + "- Poster"}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          ) : (
            <p className="mt-4 text-white">Start searching!</p>
          )}
        </div>
      </>
    );
  }
}

export default Search;
