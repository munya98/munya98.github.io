import React, { Component } from 'react'

export default class Tags extends Component {
	render(){
		let tags = this.props.tags.map((t, i) => {
			return <li key={i}>{t}</li>
		})
		return (
			<ul>
				{ tags }
			</ul>
		)
	}
}
