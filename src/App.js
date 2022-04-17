import React, { useState } from 'react';
import './App.css';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';

const App = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const ratingSelectHandler = (rating) => setSelectedRating(rating);

  const ratingSubmitHandler = () => {
    setRatingSubmitted((prev) => !prev);
  };

  return (
    <div className="main">
      {!ratingSubmitted && (
        <RatingCard
          selectedRating={selectedRating}
          onRatingSelect={ratingSelectHandler}
          onRatingSubmit={ratingSubmitHandler}
        />
      )}
      {ratingSubmitted && <ThankYouCard rating={selectedRating} />}
    </div>
  );
};

export default App;
