import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

// components
import Header from "./component/headerComponent/header";
import Footer from "./component/footerComponent/footer";
import Homepage from "./component/pages/homePage";
import Products from "./component/pages/products";

// includes
import './Assets/css/scss/default.min.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />

      <Route exact path="/" component={Homepage} />
      <Route exact path="/Products" component={Products} />

      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
