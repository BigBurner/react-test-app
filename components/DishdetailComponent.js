import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { imgPref } from '../shared/Constants';

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
		if (props.dish != null) {
			return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
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