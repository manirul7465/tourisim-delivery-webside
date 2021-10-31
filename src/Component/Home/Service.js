
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Service.css';

const Service = ({service}) => {
    const {_id,name,price,discription,img}=service;
    return (
        <div className="service">
            <img className="img" src={img} alt=""/>
            <h3>item:{name}</h3>
            <h5>details:{discription}</h5>
            <h5>price:{price}</h5>
            <Link to={`/order/${_id}`}>
          <Button className="button" variant="warning" active>
              Order now {name.toLowerCase()}
            </Button>
          </Link>
        </div>
    );
};

export default Service;