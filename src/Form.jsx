import React, { useState } from 'react';

export function validate(input) {
  let errors = {};
  if(!input.username){
    errors.username = 'Username is required';
  }
  else if(!/^([a-z0-9_.-]+)@([\da-z.]+)\.([a-z.]{2,6})$/.test(input.username)){
    errors.username = 'Username is invalid';
  }
  

  if(!input.password){
    errors.password ='Password is required';
  }
  else if(!/(?=.*[0-9]).+[0-9]*/.test(input.password)){
    errors.password = 'Password is invalid';
  }
  
  return errors;
}

export default function  Form() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()){
        alert(input.password)
      }      
   }



  return (
      
        <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>  
          <input className={errors.username && 'danger'} type='text' name='username' onChange={handleInputChange} value={input.username} />
          {errors.username && (<p className="danger">{errors.username}</p>)}
        </div>
        <div>
          <label>Password:</label>
          <input className={errors.password && 'danger'} type='password' name='password' onChange={handleInputChange} value={input.password} /> 
          {errors.password && (<p className="danger">{errors.password}</p>)}
        </div>
        <input type='submit' />   
        </form>      
  )
}

