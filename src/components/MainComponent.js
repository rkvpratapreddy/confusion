import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
// import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }


  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Restorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}></Menu>
        <DishDetail
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        
            {/* <Routes>
              <Route path='/home' element={HomePage} />
              <Route exact path='/menu' element={() => <Menu dishes={this.state.dishes} />} />
              <Route to="/" element={<Navigate replace to="/home" />}/>
              </Routes> */}
              
              <Header />
                {/* <Routes>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                  <Route to="/" component={<Navigate replace to="/home" />}/>
                </Routes> */}
                <Routes>
                  <Route path='/home' element={HomePage} />
                  <Route exact path='/menu' element={() => <Menu dishes={this.state.dishes} />} />
                  {/* <Route to="/" component={<Navigate replace to="/home" />}/> */}
                </Routes>
                
              <Footer />
      </div>
    );
  }
}

export default Main;
