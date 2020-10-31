import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className='col-lg-4 col-md-6'>
        <div className='card'>
          <img src={props.imgurl} className='card-img-top' alt='...' />
          <div class='card-body'>
            <h5 class='card-title'>{props.title}</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to='#' class='btn btn-primary'>
              {props.btn}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
