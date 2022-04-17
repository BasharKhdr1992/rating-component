import React from 'react';

const RatingBox = ({ children, onRatingSelect, value, styles }) => {
  return (
    <div
      style={styles}
      onClick={() => onRatingSelect(value)}
      className="circle"
    >
      {children}
    </div>
  );
};

export default RatingBox;
