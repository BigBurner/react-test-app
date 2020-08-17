import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
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
        <Header />
      	<Menu dishes={this.state.dishes}
              onClick={(dishId) => this.onDishSelect(dishId) }/>
        <DishDetail dish={this.getDish()}
              />
        <Footer />
      </div>
    );
  }
}

export default Main;