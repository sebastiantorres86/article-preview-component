import React from "react";
import "../index.css";
import Copy from "./Copy";
import Author from "./Author";

class Content extends React.Component {
  render() {
    const copy = {
      title:
        "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
      text:
        "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
      author: "Michelle Appleton",
      time: "28 Jun 2020",
    };

    return (
      <div className="content">
        <Copy className="copy" copy={copy} />
        <Author className="author" copy={copy} />
      </div>
    );
  }
}

export default Content;
