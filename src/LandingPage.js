import React, { Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import Box from "./Box";
import RedBox from "./RedBox";
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      total1: 0,
      total2: 0,
      totalInput1: "",
      totalInput2: "",
      show: false,
    };
  }

  generate = () => {
    this.setState({
      total1: this.state.totalInput1,
      total2: this.state.totalInput2,
    });
  };

  clear = () => {
    this.setState({
      total1: false,
      total2: false,
    });
  };

  showValues = () => {
    this.setState({
      show: true,
    });
  };

  // onChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  render() {
    const inputs1 = [];
    const inputs2 = [];

    for (let i = 1; i <= this.state.total1; i++) {
      inputs1.push(
        <Fragment>
          <Zoom>
            <Box count={i} />
          </Zoom>
        </Fragment>
      );
    }
    for (let i = 1; i <= this.state.total2; i++) {
      inputs2.push(
        <Fragment>
          <Zoom>
            <RedBox count={i}></RedBox>
          </Zoom>
        </Fragment>
      );
    }
    return (
      <div className="header">
        <h1 className="header__title">Token Generator</h1>
        <form className="form">
          <label>
            Number of blue tokens
            <input
              type="number"
              max="10"
              onChange={(e) => this.setState({ totalInput1: e.target.value })}
              value={this.state.totalInput1}
              placeholder=""
            />
          </label>
          <label>
            Number of red tokens
            <input
              type="number"
              max="10"
              onChange={(e) => this.setState({ totalInput2: e.target.value })}
              value={this.state.totalInput2}
              placeholder=""
            />
          </label>
        </form>

        <div className="form__button">
          <button onClick={this.clear}>Clear</button>
          <button
            disabled={!this.state.totalInput1 || !this.state.totalInput2}
            onClick={this.generate}
          >
            Generate
          </button>
          <div className="grid">
            <div className="form__blueBoxes">{inputs1}</div>

            <div className="form__redBoxes">{inputs2}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
