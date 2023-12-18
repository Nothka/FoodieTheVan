// import React from 'react';
// import { Link } from 'react-router-dom';

// function CardItem(props) {
//   return (
//     <>
//       <li className='cards__item'>
//         <Link className='cards__item__link' to={props.path}>
//           <figure className='cards__item__pic-wrap' data-category={props.label}>
//             <img
//               className='cards__item__img'
//              alt='Travel'
//               src={props.src}
//             />
//           </figure>
//           <div className='cards__item__info'>
//             <h5 className='cards__item__text'>{props.text}</h5>
//           </div>
//         </Link>
//       </li>
//     </>
//   );
// }

// export default CardItem;

// CardItem.jsx

// CardItem.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Modal from './Modal';

// function CardItem({ src, text, label, details }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <li className='cards__item' onClick={openModal}>
//         <Link className='cards__item__link' >
//           <figure className='cards__item__pic-wrap' data-category={label}>
//             <img className='cards__item__img' alt={text} src={src} />
//           </figure>
//           <div className='cards__item__info'>
//             <h5 className='cards__item__text'>{text}</h5>
//           </div>
//         </Link>
//       </li>
//       <Modal
//         open={isModalOpen}
//         onClose={closeModal}
//         image={src}
//         title={text}
//         details={details}
//       />
//     </>
//   );
// }

// export default CardItem; 



// CardItem.js
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
