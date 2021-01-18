import "./RedBox.css";
import React from "react";

class RedBox extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="redSquare">
          <h3>{this.props.count}</h3>
        </div>
      </div>
    );
  }
}

// const RedBox = () => {
//   return (
//       <div className="box">
//   <div className="redSquare"></div>
//   </div>
//   )
// };
export default RedBox;
