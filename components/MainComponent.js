import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDishId: null
    }
  }

  onDishSelect(dishId) {
    console.log(">>>>"+dishId);
    this.setState({ selectedDishId: dishId});
  }

  getDish(dishId) {
    let sds = this.state.dishes.filter( (dish) => {
    // console.log(dish.id +":"+ this.state.selectedDishId);
      if (dish.id === this.state.selectedDishId) {
        return true;
      } else {
        return false;
      }
    });
    return sds[0];
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      	<Menu dishes={this.state.dishes}
              onClick={(dishId) => this.onDishSelect(dishId) }/>
        <DishDetail dish={this.getDish()}
              />
      </div>
    );
  }
}

export default Main;