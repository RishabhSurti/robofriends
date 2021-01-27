import React, { Component } from "react"
import RoboArray from "./RoboArray"

class Card extends Component {
	render(){
		const {name,email,id} = this.props;
		return(
			<div className = ' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img src = {`https://robohash.org/${id}?200x200`}/>
				<div>
					<h3> {name} </h3>
					<p> {email} </p>
				</div>
			</div>

		);
	}
}


export default Card;