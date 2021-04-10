import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
      console.log('form submitted', data)
    };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input  defaultValue={loggedInUser.name} {...register("name")} placeholder="Your Name" />
      
      <input  defaultValue={loggedInUser.email} {...register("email")}  placeholder="Your Email"/>
      
      <input  {...register("address", { required: true })}  placeholder="Your Address" />
     
      <input  {...register("phone", { required: true })}  placeholder="Your Phone Number"/>
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;