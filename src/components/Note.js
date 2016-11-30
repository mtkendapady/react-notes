import React from "react";

export default class Note extends React.Component {
  render() {
    return (
      <div className="note-wrapper">
        <div className="note">
          <h3>{ this.props.title }</h3>
          <p>
            { this.props.content }
          </p>
        </div>
      </div>
    )
  }
}
