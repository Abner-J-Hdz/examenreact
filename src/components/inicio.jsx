import React, { Component } from 'react';
import Image from '../img/pum.png';

const Inicio = () => {
    return ( 
    <div className="jumbotron">
        <h1 className="display-4 text-dark font-weight-bold">Examen de Facultativa I</h1>
        <h1 className="display-4 text-dark font-weight-bold"> IV Ing. en Sistemas de Informacion</h1>

        <div className="row">
            <div className="col-md-4">
                <p className="lead text-dark font-weight-bold">
                Integrantes: <br/>
                Aldel Neftali Serrano Castillo <br/>
                Abner Joel Martinez Hernandez  <br/>
                Jeffryn Antonio Lacayo Castillo <br/>
                Luis Fabian Perez Gaitan
                </p>            
            </div>
            <div className="col-md-8">
                <div className="img-fluid">
                <img src={Image} className="img-fluid" alt="" width="" heigth=""/>
                </div>
            </div>
        
        </div>


        <hr className="my-4"/>
        <p>UI para gestion de Email</p>
        <p className="lead">
            <a className="btn btn-info btn-lg" href="#" role="button">React JS</a>
        </p>
    </div>       




     );
}
 
export default Inicio;