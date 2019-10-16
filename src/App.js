import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Picture from "./components/Picture";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import cats from "./cats.json";
import "./App.css";

class App extends Component {
  state = {
    topScore: 0,
    currentScore: 0,
    clickedPictures: [],
    message: "Welcome to Clicky Cats!",
    cats: cats
  };

  handlePictureClick = index => {
    if (this.state.clickedPictures.includes(index)) {
      this.setState({
        message: "You Lost! Click any of the images to start over!",
        clickedPictures: [],
        topScore:
          this.state.topScore < this.state.currentScore
            ? this.state.currentScore
            : this.state.topScore,
        currentScore: 0
      });
    } else {
      var score = this.state.currentScore + 1;
      if (score === 9) {
        this.setState({
          message: "Whoa! You clicked all the Cats! Nicely done!",
          clickedPictures: [],
          currentScore: 0,
          topScore: 9
        });
      } else {
        this.setState({
          message: "Nice! Keep Clicking Those Cat!",
          clickedPictures: this.state.clickedPictures.concat(index),
          currentScore: this.state.currentScore + 1
        });
      }
    }
  };
  render() {
    return (
      <Fragment>
        <Header
          topScore={this.state.topScore}
          currentScore={this.state.currentScore}
          message={this.state.message}
        />
        <Wrapper>
          {this.state.cats
            .sort((a, b) => Math.random() - 0.5)
            .map((cat, i) => (
              <Picture
                key={cat.id}
                id={cat.id}
                gridArea={"Picture-" + i + " Picture"}
                img={cat.image}
                handleClick={this.handlePictureClick}
                index={i}
              />
            ))}
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
