// import React from 'react';
// import './Form.css';

// const FormSuccess = () => {
//   return (
//     <div className='form-content-right'>
//       <h1 className='form-success'>We have received your request!</h1>
     
//     </div>
//   );
// };

// export default FormSuccess;

import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <div className='form-success'>
        <h1>We have received your request!</h1>
      </div>
      <div className='gif-container'>
        <iframe
          src="https://giphy.com/embed/MxYQrB9jeGzza"
          width="100%"
          height="100%"
          frameBorder="0"
          title="background-gif"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FormSuccess;
