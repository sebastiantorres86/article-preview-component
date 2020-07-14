import React from "react";
import "../index.css";
import Avatar from "../images/avatar-michelle.jpg";
import Share from "./Share";

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDisplay: true,
    };
  }

  ToggleButton() {
    this.setState((currentState) => ({
      textDisplay: !currentState.textDisplay,
    }));
  }

  render() {
    return (
      <div className="author">
        <img className="avatar" src={Avatar} alt="Avatar Michelle" />
        <div className="author-info">
          <h2>{this.props.copy.author}</h2>
          <time>{this.props.copy.time}</time>
        </div>
        <button onClick={() => this.ToggleButton()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path
              fill="#6E8098"
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </button>
        {!this.state.textDisplay && <Share />}
      </div>
    );
  }
}

export default Author;
