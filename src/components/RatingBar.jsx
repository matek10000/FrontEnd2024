import React from 'react';

const RatingBar = ({ rate, onRatingChange }) => {
    const totalStars = 10;

    const handleClick = (newRating) => {
        // Fix: zmiana ratingu na liczbę
        onRatingChange(Number(newRating));
    };

    return (
        <div className="rating-bar">
            {Array.from({ length: totalStars }, (_, index) => (
                <span
                    key={index}
                    className="star"
                    onClick={() => handleClick(index + 1)}
                    style={{
                        cursor: 'pointer',
                        color: index < rate ? 'gold' : 'gray'
                    }}
                >
                    {index < rate ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

export default RatingBar;
