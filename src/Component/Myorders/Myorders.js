import React, { useEffect, useState } from 'react';

import './Myorder.css';


const Myorders = () => {

    const [orders,setOrders]=useState([])
       useEffect(()=>{
           fetch('https://howling-catacombs-49146.herokuapp.com/orders')
           .then(res=>res.json())
           .then(data=>setOrders(data));
       },[])
        // delete item
        const handleDeleteItem=id=>{
            const proceed=window.confirm('are you sure, you want delete item?');
            if(proceed){
                const url=`https://howling-catacombs-49146.herokuapp.com/orders/${id}`;
                fetch(url,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert('deleted succesfully');
                        const remainingOrders=orders.filter(order=>order._id!==id);
                        setOrders(remainingOrders)
                    }
                });
            }
        }

    // 
 


    return (
        <div>
            <h2>total orders:{orders.length}</h2>
    
            <ul>
            {
                orders.map(order=><li
                     key={order._id}
                     >foodsname:{order.foodsname}
                      name:{order.name} email :{order.email} 
                      <button onClick={()=>handleDeleteItem(order._id)} className="bg-warning">cancel order</button>
                      </li>)
            }
            </ul>
           
        </div>
    );
};

export default Myorders;