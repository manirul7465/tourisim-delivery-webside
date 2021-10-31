import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';




const Addservice = () => {
const { register, handleSubmit, reset } = useForm();
const onSubmit = data =>{
    console.log(data);
    axios.post('https://howling-catacombs-49146.herokuapp.com/foods',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('added succesfully');
            reset();
        }
    })
} 


    return (
        <div className="add-service">
            <h1>this is addservice</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} 
       placeholder="name"/>
      <input {...register("description")} placeholder="description" />
      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="img url"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default Addservice;