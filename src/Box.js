import "./Box.css";
import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="blueSquare">
          <h3>{this.props.count}</h3>
        </div>
      </div>
    );
  }
}

// const Box = () => {
//   return (
//       <div className="box">
//   <div className="blueSquare"></div>
//   </div>
//   )
// };
export default Box;
