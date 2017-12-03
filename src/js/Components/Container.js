import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';

export default class Container extends Component {
	constructor(props){
		super(props);
		this.state = { projects: []}
	}
	componentDidMount(){
		fetch('data.json')
		.then((res) => res.json())
		.then((data) => {
			this.setState({ projects: data})
		})
	}
	render(){
		const projects = this.state.projects.map((p, i) => {
			return <Project data={p} key={i}/>
		})
		return(
			<div className = 'app container'>

				<header>
					{/*<div className = 'menu'>
						<span></span>
						<span></span>

					</div>*/}
					<ul className = 'social-links'>
						<li>
							<a href="https://codepen.io/munya98/"><i className="fa fa-codepen" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="https://github.com/munya98"><i className="fa fa-github" aria-hidden="true"></i></a>
						</li>
						{/*<li>
							<a href="https://twitter.com/munyaXD"><i className="fa fa-twitter" aria-hidden="true"></i></a>
						</li>*/}
						<li>
							<a href="mailto:munyac98@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
						</li>
					</ul>
				</header>
				<main >

					{ projects }
				</main>
				<footer>
					<p><i>Design is hard. More stuff <a href="https://github.com/munya98">here</a></i></p>
				</footer>
			</div>

		)
	}
}


ReactDOM.render(<Container />, document.getElementById('app'));
