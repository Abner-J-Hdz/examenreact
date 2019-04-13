import React, { Component } from 'react';
import logo from './logo.svg';
import  {Route} from 'react-router-dom';


import './App.css';
import MenuLateral from './components/menulateral';
import Encabezado from './components/encabezado';
import Cliente from './components/cliente';
import Product from './components/product';
import Order from './components/order';
import './dashboard.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
       
          <Encabezado></Encabezado>
              
          <MenuLateral></MenuLateral>  

          <script src="./scripts/bootstrap.bundle.min.js"></script>
          <script src="./scripts/dashboard.js"></script>
          <script src="./scripts/jquery-3.3.1.slim.min.js"></script>
  
      </React.Fragment>

    );
  }
}

export default App;
