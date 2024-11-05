import React, { useContext } from 'react';
import RatingBar from './RatingBar';
import { AppContext } from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

const PersonProfile = ({ person }) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/lab4/edit/:id', { state: { id: person.id } });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      payload: { id: person.id }
    });
  };

  const handleRate = () => {
    const newRating = person.rating === 10 ? 0 : person.rating + 1;
    dispatch({
      type: "rate",
      payload: { id: person.id, rating: newRating }
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">Id: {person.id}</p>
        <p className="card-text">Data urodzenia: {person.birth}</p>
        <p className="card-text">Kolor oczu: {person.eyes}</p>
        <p className="card-text">Rating: {person.rating}</p>
        <RatingBar rate={person.rating} />

        <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
        <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
        <button className="btn btn-warning" onClick={handleRate}>Rate</button>
      </div>
    </div>
  );
};

export default PersonProfile;
