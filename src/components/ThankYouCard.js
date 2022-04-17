import React from 'react';
import ThankYouIcon from './ThankYouIcon';

const ThankYouCard = ({ rating }) => {
  const message = `You selected ${rating} out of 5`;

  return (
    <div className="card thank-you-card">
      <div className="thank-you-icon-container">
        <ThankYouIcon />
      </div>
      <p className="rating-summary">{message}</p>
      <h1>Thank You</h1>
      <p className="paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, do not hesitate to get in touch.
      </p>
    </div>
  );
};

export default ThankYouCard;
