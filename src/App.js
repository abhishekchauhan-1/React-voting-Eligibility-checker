import { Component } from "react";
import "./style.css";
import myimage from "./favicon.png";
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      eligible: "",
    };
  }
  handleInput = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      this.setState({ inputValue });
    }
  };

  handleClick = () => {
    if (this.state.inputValue >= 18 && this.state.inputValue <= 120) {
      this.setState({ eligible: "You are eligible to vote." });
    } else if (this.state.inputValue > 120) {
      this.setState({ eligible: "Ghosts are not allowed to vote." });
    } else {
      this.setState({ eligible: "You are not eligible to vote yet." });
    }
  };
  render() {
    const inputValue = this.state.inputValue;
    return (
      <div className="main-container">
        <img src={myimage} alt="logo" />
        <div className="outerDiv">
          <h3>Voting Eligibility Checker</h3>
          <p className="p1">Enter your Age:</p>
          <input
            className="input"
            type="text"
            name="inputArea"
            value={inputValue}
            onChange={this.handleInput}
          />

          <button onClick={this.handleClick}>Check Eligibility</button>
          <div className="p2">
            <p
              className={
                this.state.eligible === "You are eligible to vote."
                  ? "eligible-message"
                  : this.state.eligible === "You are not eligible to vote yet."
                  ? "not-eligible-message"
                  : "ghosts"
              }
            >
              {this.state.eligible}
            </p>
          </div>
        </div>
        <p className="p3">
          Made With <i className="fa-solid fa-heart text-red-600 icon"></i> by
          Abhishek Singh Chauhan
        </p>
      </div>
    );
  }
}

export default App;
