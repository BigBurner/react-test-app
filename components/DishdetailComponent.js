import React, {Component} from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

//this perfix is needed on StackBlitz to display images, locally this can be blank
//const imgPref = '';
export const imgPref = 'https://stackblitz.com/files/react-9yqgvb/github/BigBurner/react-test-app/master/';

class Dishdetail extends Component {
	constructor(props) {
		console.log('Dishdetail >> Constructor');
		super(props);
		
		this.state = {
            selectedDish: this.props.dish
		}
	}
	
	renderDish (dish) {
		return (
				<Card>
					<CardImg top src={imgPref+dish.image} alt={dish.name} />
					<CardBody>
					  <CardTitle>{dish.name}</CardTitle>
					  <CardText>{dish.description}</CardText>
					</CardBody>
				</Card>			
		);
	}

	renderComments(comments){
		if (comments == null) {
			return (<div></div>);
		}
		
		const comms = comments.map((com) => {
			return (<div key={com.id}>
						<li>{com.comment}</li>
						<li>--{com.author}, {com.date}</li>
						<li>&nbsp;</li>
					</div>
				   )
		});
		return (
		<div>
			<h4>Comments</h4>
			<ul className = "list-unstyled">
				{comms}
			</ul>
		</div>
		);				
	}
	
	render() {
		const dish = this.props.dish;
		
		if (dish != null) {
			return (
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(dish)}
					</div>
					<div className="col-12 col-md-5 m-1">
						{this.renderComments(dish.comments)}
					</div>
				</div>
			);
		} else {
			return (
				<div></div>
			);
		}
	}
}

export default Dishdetail;