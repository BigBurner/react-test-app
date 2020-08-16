import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

//this perfix is needed on StackBlitz to display images, locally this can be blank
// const imgPref = '';
const imgPref = 'https://stackblitz.com/files/react-9yqgvb/github/BigBurner/react-test-app/master/';

	function RenderDish({dish}) {
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

	function RenderComments({comments}){
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
	
	function Dishdetail(props) {
		const dish = props.dish;
		
		if (dish != null) {
			return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={dish} />
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={dish.comments} />
					</div>
				</div>
			</div>	
			);
		} else {
			return (
				<div></div>
			);
		}
	}

export default Dishdetail;