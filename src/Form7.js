import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./form7.css";

export default function Form7() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input placeholder="amir" {...register("firstName")} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder="fallah" {...register("lastName")} />
        </div>

        <div>
          <label htmlFor="isDeveloper">Is an developer?</label>
          <input
            type="checkbox"
            placeholder="luo"
            value="yes"
            {...register("isDeveloper")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="amir.falahmanesh@yahoo.com"
            type="email"
            {...register("email")}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

