import React from "react";
import "../index.css";

class Copy extends React.Component {
  render() {
    return (
      <div className="copy">
        <h1>{this.props.copy.title}</h1>
        <p>{this.props.copy.text}</p>
      </div>
    );
  }
}

export default Copy;
