import { Component } from "react";
import NetflixFooter from "./assets/components/NetflixFooter";
import NetflixHomeMain from "./assets/components/NetflixHomeMain";
import NetflixNavbar from "./assets/components/NetflixNavbar";
import Profile from "./assets/components/Profile";
import Settings from "./assets/components/Settings";
import MoviePage from "./assets/components/MoviePage";

class App extends Component {
  state = {
    currentPage: "home",
    clickedId: "",
  };
  render() {
    return (
      <>
        <NetflixNavbar setPage={(value) => this.setState(value)} />

        {this.state.currentPage === "home" && (
          <NetflixHomeMain setPage={(value) => this.setState(value)} />
        )}
        {this.state.currentPage === "settings" && (
          <Settings setPage={(value) => this.setState(value)} />
        )}
        {this.state.currentPage === "profile" && (
          <Profile setPage={(value) => this.setState(value)} />
        )}
        {this.state.currentPage === "movie" && (
          <MoviePage
            movieId={this.state.clickedId}
            setPage={(value) => this.setState(value)}
          />
        )}
        <NetflixFooter setPage={(value) => this.setState(value)} />
      </>
    );
  }
}

export default App;
