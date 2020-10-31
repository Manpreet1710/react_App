import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${data.email}   Password: ${data.password}`);
  };

  return (
    <>
      <div className='container my-3'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <h2 className='mb-3'>Registation Form</h2>
            <form onSubmit={formSubmit}>
              <div className='mb-3'>
                <label for='exampleInputEmail1' class='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleInputPassword1' class='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  value={data.password}
                  onChange={InputEvent}
                  id='exampleInputPassword1'
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
