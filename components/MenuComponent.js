import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { imgPref } from '../shared/Constants';
import { Link } from 'react-router-dom';

	function RenderMenuComponent({ dish, onClick }) {
		return(
			<Card>
				<Link to={`/menu/${dish.id}`}>
					<CardImg width="100%" src={imgPref+dish.image} alt={dish.name} />
					<CardImgOverlay>
					  <CardTitle>{dish.name}</CardTitle>
					</CardImgOverlay>
				</Link>
			</Card>
			);
	}


	const Menu = (props) => {
		const Menu = props.dishes.map((dish) => {
			return ( 
					<div key={dish.id} className="col-12 col-md-5 m-1">
						<RenderMenuComponent dish={dish} />
					</div>
					)
		});
		
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Menu</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					{Menu}
				</div>
			</div>
		);
	}

export default Menu;