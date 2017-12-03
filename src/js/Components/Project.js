import React, { Component } from 'react';
import Tags from './Tags';

export default class Project extends Component {
	render(){
		return (
			<div className = "project">
				<div className = "details">
					<div>
						<h2>{this.props.data.title} <p className="extra">{this.props.data.extra}</p></h2>
						<p>{this.props.data.description}</p>

					</div>
					<div className = "tags">

						<p>Created with</p>
						<Tags tags={this.props.data.tags} />
					</div>

				</div>
				<div className = "project-link">
					{this.props.data.links.live ? <a href={this.props.data.links.live}><i className="fa fa-hand-o-right" aria-hidden="true"></i></a> : ""}
					<a href={this.props.data.links.github}>Code</a>
				</div>
			</div>
		)
	}
}
