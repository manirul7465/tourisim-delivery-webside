import React, { useEffect, useState } from 'react';
import {Card, Col, Row } from 'react-bootstrap';
import './Order.css';
import { useParams } from 'react-router';


import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';

  

const Order = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  


    const {serviceId}=useParams();
    const [service, setService] = useState({});
    const {user}=useAuth();

    const onSubmit=data=>{
          fetch('https://howling-catacombs-49146.herokuapp.com/orders',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(result=>{
            if(result.insertedId){
              alert('order procces successed')
              reset();
            }
          })
          


    };
    

    useEffect(() => {
        fetch(`https://howling-catacombs-49146.herokuapp.com/foods/${serviceId}`)
            .then(res => res.json())
            .then(data =>setService(data));
                
            
            
    },[serviceId]);


     
    return (
        <div>
           <Row xs={1} md={2} className="g-4">
          
          <Col>
                 <Card>
                   <Card.Img variant="top" src={service.img} />
                   <Card.Body>
                     <Card.Title>Name: {service.name}</Card.Title>
                     <Card.Text>
                       speciality:{service.discription}
                     </Card.Text>
                     <Card.Text>
                       foods id: {serviceId}
                     </Card.Text>
                     
                     
                     <Card.Title>price: {service.price}</Card.Title>
                  
                 
               
                   </Card.Body>
                  
                 </Card>
               </Col>


               <Col>
                   <h2 className="order">place order</h2>
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                       
                     <input  defaultValue={user.displayName} {...register("name", { required: true })} />
                     <input defaultValue={user.email} {...register("email", { required: true })} />
                     {errors.email && <span className="error">This field is required</span>}
                     <input placeholder="Address" defaultValue="" {...register("address")} />
                     <input placeholder="City" defaultValue="" {...register("city")} />
                     <input placeholder="foods id" defaultValue="" {...register("id")} />
                     <input placeholder="foods name" defaultValue="" {...register("foodsname")} />
                     <input placeholder="price" defaultValue="" {...register("price")} />
                     <input placeholder="phone number" defaultValue="" {...register("phone")} />
                     
                     <input type="submit" />
                               
                     </form>
                     </Col>

</Row>

        </div>
    );
};

export default Order;   
