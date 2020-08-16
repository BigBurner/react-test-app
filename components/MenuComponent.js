import React, {Component} from 'react';
import Dishdetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

//this perfix is needed on StackBlitz to display images, locally this can be blank
//const imgPref = '';
export const imgPref = 'https://stackblitz.com/files/react-9yqgvb/github/BigBurner/react-test-app/master/';

class Menu extends Component {


   
	constructor(props) {
		console.log('MenuComp >> Constructor');
		super(props);
		
		this.state = {
            selectedDish: null
		}
	}
	
	componentDidMount () {
		console.log('MenuComp >> componentDidMount');
	}
	
	onDishSelect =(dish) => {
		this.setState( { selectedDish : dish });
	}
	

	render() {
		console.log('MenuComp >> render');
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
				<Dishdetail dish={this.state.selectedDish}/>
			</div>
		);
	}
}

export default Menu;