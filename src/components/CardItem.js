import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function CardItem({ src, text, label, details, category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className="cards__item" onClick={openModal}>
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img className="cards__item__img" alt={text} src={src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        image={src}
        title={text}
        details={details}
      />
    </>
  );
}

export default CardItem;
