import React from 'react';
import Card from './Card';
import Sdata from '../Components/Sdata';

const Service = () => {
  return (
    <>
      <div class='row my-5 mx-0 p-0'>
        <div class='col-12 mx-auto'>
          <h2 className='text-center'>Our Services</h2>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div class='row gy-4'>
              {Sdata.map((val, ind) => {
                return (
                  <Card imgurl={val.imgUrl} title={val.title} btn={val.btn} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
