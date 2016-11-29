import React from "react";

import NewNoteForm from "./NewNoteForm";
import Note from "./Note";

export default class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			notes: []
			, showNewNoteForm: false
		};
	}

	saveNewNote( postTitle, postContent ) {
		this.setState( {
			notes: [ ...this.state.notes, { postTitle, postContent } ]
		} );

		this.toggleNewNoteForm();
	}

	toggleNewNoteForm() {
		this.setState( { showNewNoteForm: !this.state.showNewNoteForm } );
	}

	render() {
		const notes = this.state.notes.map( ( note, index ) => (
			<Note
				content={ note.postContent }
				key={ index }
				title={ note.postTitle }
			/>
		) );

		return (
			<div>
      <div className="header">
        <h1>Notes</h1>
      </div>
				{ this.state.showNewNoteForm
					?
						<NewNoteForm saveNewNote={ this.saveNewNote.bind( this ) } />
					:
						<button className="btn--newpost" onClick={ this.toggleNewNoteForm.bind( this ) }>New Note</button>
				}
				{ notes }
			</div>
		);
	}
}
