import React from 'react';

const Common = (props) => {
  return (
    <>
      <div className='container-fluid bg'>
        <div className='row'>
          <div className='col-10 mx-auto flex__'>
            <div className='col-12'>
              <h1 className=' text-white'>{props.name}</h1>
              <p className=' text-white'>
                Learning, growing && exploring the world
              </p>
              <button className='btn btn-primary'>
                Subscribe <i className='fa fa-arrow-right'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
