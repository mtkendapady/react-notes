import React from "react";

export default class Post extends React.Component {
	render() {
		return (
			<div className="post">
				<h3>{ this.props.title }</h3>
				<p>
					{ this.props.content }
				</p>
			</div>
		);
	}
}
