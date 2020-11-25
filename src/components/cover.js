import React from 'react';
import coverImage from '../images/cover.png';

const Cover = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${coverImage})`,
        height: '750px',
        color: 'red',
      }}
    ></div>
  );
};

export default Cover;
