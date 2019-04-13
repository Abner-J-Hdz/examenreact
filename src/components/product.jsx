import React, { Component } from 'react';

const Product = () => {
        return ( 
        <div className="jumbotron">
            <h1 className="display-4">Welcome to Product!!!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style componet for 
            calling extra attention to featured content or information</p>
            <hr className="my-4"/>
            <p>It uses utility classe for typography and spacing to space content out winthi the large container</p>
            <p className="lead">
                <a className="btn btn-success btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>  
        );  
}
 
export default Product;