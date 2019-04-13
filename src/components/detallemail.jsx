import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import {GetDatosId} from '../services/datosService';
import Mail from './mail';

class Detallemail extends React.Component{

    state = { 
        correo: GetDatosId(this.props.match.params.parametro),
     }

    forceup(){
        const x = this.props.match.params.parametro;
        const correo =  GetDatosId(x);
        this.state.correo=correo;
      
    }     

    render() { 
        return ( 
            <div className="col-md-14 altura " key={this.state.correo.id} >
                {this.forceup()}
                <br/>
               
                <h3 className="text-dark">Correo de: {this.state.correo.email}</h3>
                <li className="list-group-item" >
                    <div className="row">
                        <div className="col-md-2">
                            <img src={this.state.correo.foto} alt="" width="60px" height="70px"/>
                        </div>
                        <div className="col-md-7">
                            <span className="text-muted"><strong className="text-dark font-weight-bold">
                                De:</strong> {this.state.correo.first_name} {this.state.correo.last_name}
                            </span> 
                        </div>
                        <div className="col-md-3">
                            <span className="text-secondary">Fecha:{this.state.correo.date}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-10">
                            <p className="text-justify">
                                {this.state.correo.description}
                            </p >
                        </div>
                    </div>
                </li>
            
            </div>
         );
    }
}
 
export default Detallemail;