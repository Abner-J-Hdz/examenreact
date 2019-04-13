import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import {GetDatos} from '../services/datosService';
import Detallemail from './detallemail';


class Mail extends Component {
    state = { 
        datos: GetDatos(),
     }


     contar(){
        const x = this.state.datos;
        return x.length;
     }

     handleset = () => {
         console.log("Click para Eliminar");
         this.forceUpdate(); 
     }

    render() { 
        return ( 
        <React.Fragment>
            <div className="row">
            <div className="col-md-4 altura" >
                <div className="card">
                    <ul className="list-group list-group-flush">
                            <li className="list-group-item" key={Mail.id}>
                                    <span className="text-dark font-weight-bold">Listado de Correos </span> 
                                    <span className="text-muted font-weight-bold"> {this.contar()} </span> 
                                    <span className="text-secondary">     </span> 
                            </li>

                        {this.state.datos.map( Mail =>(
                            <li className="list-group-item" key={Mail.id}>
                            <div className="row">
                                <div className="col-md-2 col-auto mr-auto">
                                    <img src={Mail.foto} className="" alt="" width="40px" height="45px"/>
                                </div>
                                <div className="col-md-10 ml-auto">
                                    <Link onClick={this.handleset} to={`/mail/detallemail/${Mail.id}`}><strong  className="text-info">{Mail.first_name  } {  Mail.last_name}</strong> </Link>
                                    <strong className="text-muted"> {Mail.date} </strong> <br/>
                                    <span className="text-secondary"> {Mail.email} </span>
                                </div>
                            </div>
                            </li>

                        ))}            
                    </ul>  
                </div>
            </div>  

            <div className="col-md-8">

                <Route path="/mail">
                    <Route path="/mail/detallemail/:parametro" component={Detallemail}></Route>

                </Route>
                

            </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default Mail;