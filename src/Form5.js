import React from "react";
import { useForm } from "react-hook-form";

export default function Form5() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmitHandler = data => console.log(data);



  return (
   
    <form onSubmit={handleSubmit(onSubmitHandler)}>
     
      <input defaultValue="test" {...register("example")} />
      
    
      <input {...register("exampleRequired")} />
    
     
      
      <input type="submit" />
    </form>
  );
}