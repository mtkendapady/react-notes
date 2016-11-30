import React from "react";

export default class NewNoteForm extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      noteTitle: "",
      noteContent: ""
    };
  }

  handleChange( field, event ) {
    this.setState( {
      [ field ]: event.target.value
    } );
  }

  saveNewNote() {
    this.props.saveNewNote( this.state.noteTitle, this.state.noteContent )
  }

  render() {
    return(
      <div className="new-note-wrapper">
        <div className="new-note">
          <input
            onChange={ this.handleChange.bind( this, "noteTitle" ) }
            type="text"
            value={ this.state.noteTitle }
            placeholder="I'm a title"
          />

          <textarea
            cols="30"
            onChange={ this.handleChange.bind( this, "noteContent") }
            rows="10"
            value={ this.state.noteContent }
            placeholder="Say something..."
          />

          <button
            onClick={ this.saveNewNote.bind( this ) }
            className="btn--newpost"
          >
            Save
          </button>
        </div>
      </div>
    )
  }
}
