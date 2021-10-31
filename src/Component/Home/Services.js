import React, { useEffect, useState } from 'react';

import Service from './Service';
import './Services.css';


const Services = () => {
    const [secvices,setServices]=useState([]);
    
    useEffect(()=>{
        fetch('https://howling-catacombs-49146.herokuapp.com/foods')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
        
    
 

    return (
        <div  className="container">
        <div className="services">
            {
                secvices.map(service=><Service
                key={service.id}
                service={service}
                
                ></Service>)
            }
           
          </div>

        </div>
        
    );
};

export default Services;