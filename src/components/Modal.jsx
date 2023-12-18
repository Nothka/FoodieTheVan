// Modal.jsx

import React from 'react';
import './Modal.css';
import Rating from './Rating';

const Modal = ({ open, onClose, image, title, details }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalLeft'>
          <img src={image} alt={title} className='modalImage' />
        </div>
        <div className='modalRight'>
          <div className='content'>
            <h2>{title}</h2>
            <p>Kcal: {details?.kcal || 'N/A'}</p>
            <p>Allergies: {details?.allergies || 'None'}</p>
            <p>{details?.description || 'No description available'}</p>
          </div>
          <Rating></Rating>
        </div>
      </div>
    </div>
  );
};

export default Modal;
