import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronRight  } from "react-icons/bs";


export const CardItem = ({title,description}) => {
  return (
    <>
    <div className='row justify-content-center'>
        <ul className="list-group list-group-light mx-auto col-xxl-6 col-xl-7 col-lg-9 col-md-11 col-sm-11">
          <li className="list-group-item d-flex justify-content-between align-items-start cards mb-3">
            <div className="ms-1 text-cards text-start">
              <div className="fw-bold text-start title-li fs-4 ">{title}</div>
              {description}
            </div>
            <span className="mt-auto mb-auto icon-arrow">{<BsChevronRight style={{width: "100px", height:"2rem"}}/>}</span>
          </li>
        </ul>

    </div>
   
   </>

  )
}

CardItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
