import React from 'react';
import RatingBox from './RatingBox';
import Star from './Star';

const RatingCard = ({ selectedRating, onRatingSelect, onRatingSubmit }) => {
  const ratings = [1, 2, 3, 4, 5];

  const ratingClickHandler = (value) => {
    onRatingSelect(value);
  };

  return (
    <div className="card">
      <div className="header">
        <div className="circle">
          <Star />
        </div>
      </div>
      <h1>How did we do?</h1>
      <p className="paragraph">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings-container">
        {ratings.map((rating, index) => {
          if (selectedRating && selectedRating === rating) {
            return (
              <RatingBox
                key={index}
                value={rating}
                styles={{
                  backgroundColor: 'hsl(25, 97%, 53%)',
                  color: 'hsl(0, 0%, 100%)',
                }}
                onRatingSelect={ratingClickHandler}
              >
                {rating}
              </RatingBox>
            );
          } else {
            return (
              <RatingBox
                key={index}
                value={rating}
                onRatingSelect={ratingClickHandler}
              >
                {rating}
              </RatingBox>
            );
          }
        })}
      </div>
      <div className="btn-submit" onClick={onRatingSubmit}>
        SUBMIT
      </div>
    </div>
  );
};

export default RatingCard;
