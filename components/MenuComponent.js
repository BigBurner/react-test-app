import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { imgPref } from '../shared/Constants';

	function RenderMenuComponent({ dish, onClick }) {
		return(
			<Card onClick={() => onClick(dish.id)}>
				<CardImg width="100%" src={imgPref+dish.image} alt={dish.name} />
				<CardImgOverlay>
				  <CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Card>
			);
	}


	const Menu = (props) => {
		const Menu = props.dishes.map((dish) => {
			return ( 
					<div key={dish.id} className="col-12 col-md-5 m-1">
						<RenderMenuComponent dish={dish} onClick={props.onClick}/>
					</div>
					)
		});
		
		return (
			<div className="container">
				<div className="row">
					{Menu}
				</div>
			</div>
		);
	}

export default Menu;