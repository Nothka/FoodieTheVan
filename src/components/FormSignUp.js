import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import './Button.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Contact Us
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Message</label>
          <textarea
            className='form-input-1'
            type='text'
            name='message'
            placeholder='Send a message'
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
    
        <button className='btn--small' type='submit'>
          Send Message
        </button>
      </form>
     
      
    </div>
  );
};

export default FormSignup;