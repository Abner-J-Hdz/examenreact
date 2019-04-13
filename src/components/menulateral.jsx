import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dashboard.css';
import  {Route, Switch, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Cliente from './cliente';
import Order from './order';
import Product from './product'
import Inicio from './inicio';
import Mail from './mail';
import Error404 from './error404';

class MenuLateral extends Component {
    state = {  }
    render() { 
        return ( 
    <div className="container-fluid">
        <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                <span data-feather="home"></span>
                                Navegacion <span className="sr-only">(current)</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/mail">
                                <span data-feather="bar-chart-2"></span>
                                Email
                                </Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">
                                <span data-feather="file"></span>
                                Orders
                                </Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">
                                <span data-feather="shopping-cart"></span>
                                Products
                                </Link>
                            </li>
                                
                            <li className="nav-item">
                                <Link className="nav-link" to="/cliente">
                                <span data-feather="users"></span>
                                Customers
                                </Link>
                            </li>
                                
                        </ul>
                    

                    </div>
                </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 quitar">
                    <Switch>
                        <Route path="/inicio" component={Inicio}/>
                        <Route path="/cliente" component={Cliente}/>
                        <Route path="/product" component={Product}/>
                        <Route path="/order" component={Order}/>
                    
                        <Route path="/mail" component={Mail}>
                            
                        </Route>
                        
                        <Route path="/error404" component={Error404}/>
                        <Redirect from="/" exact to="/inicio"/>
                        <Redirect to="/error404"/>
                    </Switch>
                </main>

               
        </div>        
    </div>           
         );
    }
}
 
export default MenuLateral;