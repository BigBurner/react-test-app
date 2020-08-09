import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

//this perfix is needed on SB, locally this can be blank
//const imgPref = '';
export const imgPref = 'https://stackblitz.com/files/react-9yqgvb/github/BigBurner/react-test-app/master/';

class Menu extends Component {



	constructor(props) {
		super(props);
		
		this.state = {
            selectedDish: null
		}
	}
	
	onDishSelect =(dish) => {
		this.setState( { selectedDish : dish });
	}
	
	renderDish(dish) {
		if (dish != null) {
			return (
                <Card>
                    <CardImg top src={imgPref+dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>			
			);
		} else {
			return (
				<div></div>
			);
		}
	}
	render() {
		const Menu = this.props.dishes.map((dish) => {
			return ( 
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card key={dish.id}
					  onClick={() => this.onDishSelect(dish)}>
					  <CardImg width="100%" src={imgPref+dish.image} alt={dish.name} />
					  <CardImgOverlay>
						  <CardTitle>{dish.name}</CardTitle>
					  </CardImgOverlay>
					</Card>
				</div>
		)
		});
		
		return (
			<div className="container">
				<div className="row">
					{Menu}
				</div>
                <div  className="col-12 col-md-5 m-1">
					{this.renderDish(this.state.selectedDish)}
                </div>
			</div>
		);
	}
}

export default Menu;