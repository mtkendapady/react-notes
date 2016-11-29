import React from "react";

export default class NewPostForm extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			postTitle: ""
			, postContent: ""
		};

	}

	handleChange( field, event ) {
		this.setState( {
			[ field ]: event.target.value
		} );
	}

	saveNewPost() {
		this.props.saveNewPost( this.state.postTitle, this.state.postContent )
	}

	render() {
		return (
			<div className="new-post-wrapper">
        <div className="new-post">
          <input
          onChange={ this.handleChange.bind( this, "postTitle" ) }
          type="text"
          value={ this.state.postTitle }
          placeholder="I'm a title"
          />

          <textarea
          cols="30"
          onChange={ this.handleChange.bind( this, "postContent" ) }
          rows="10"
          value={ this.state.postContent }
          placeholder="Say something..."
          className="margin-bottom-10"
          />

          <button className="btn--newpost margin-bottom-10" onClick={ this.saveNewPost.bind( this ) }>Save</button>
        </div>
			</div>
		);
	}
}
