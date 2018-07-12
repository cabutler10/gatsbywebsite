import React, { Fragment, Component } from "react";
import Header from "../components/Header";
import Splash from "../components/Splash";
import Interests from "../components/Interests";
import About from "../components/About";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

class Index extends Component {
  state = {
    page: "home"
  };

  handlePageChange = page => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;

    return (
      <div>
        <Header handlePageChange={this.handlePageChange} />
        {page === "home" && (
          <Fragment>
            <Splash />
            <Interests />
            <About />
          </Fragment>
        )}
        {page === "resume" && (
          <Fragment>
            <Resume />
          </Fragment>
        )}
        <Footer />
      </div>
    );
  }
}

export default Index;