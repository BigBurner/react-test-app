import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from  'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
	  comments: COMMENTS,
	  promotions: PROMOTIONS,
	  leaders: LEADERS
    }
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
    const HomePage = () => {
      return (
        <Home 	dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
				promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
				leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
		/>
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
		  <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;