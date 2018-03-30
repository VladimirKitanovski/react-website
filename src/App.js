import React, { Component } from 'react';

// components
import Header from "./component/headerComponent/header";
import Footer from "./component/footerComponent/footer";
import Homepage from "./component/pages/homePage";

// includes
import './Assets/css/scss/default.min.css';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <Homepage />

      <Footer />
      </div>
    );
  }
}

export default App;
