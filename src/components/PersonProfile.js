import React, { useState } from 'react';
import RatingBar from './RatingBar';

const PersonProfile = ({ person, onEdit, onDelete }) => {
    const [rating, setRating] = useState(person.rating || 0);

    const handleRate = () => {
        if (rating === 10) {
            setRating(0);
        } else {
            setRating(prevRating => prevRating + 1);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">Id: {person.id}</p>
                <p className="card-text">Data urodzenia: {person.birth}</p>
                <p className="card-text">Kolor oczu: {person.eyes}</p>
                <p className="card-text">Rating: {rating}</p>
                <RatingBar rate={rating} />

                <button className="btn btn-primary me-2" onClick={() => onEdit(person.id)}>Edit</button>
                <button className="btn btn-danger me-2" onClick={() => onDelete(person.id)}>Delete</button>
                <button className="btn btn-warning" onClick={handleRate}>Rate</button>
            </div>
        </div>
    );
};

export default PersonProfile;
