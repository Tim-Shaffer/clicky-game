import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <div className="container row">
            {this.state.images.map(image => (
                        <Card
                            id={image.id}
                            key={image.id}
                            image={image.image}
                        />
            ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }

};

export default App;
