import React, { useState, useContext } from 'react';
import AppContext from '../data/AppContext';
import RatingBar from './RatingBar';

const PersonProfile = ({ person }) => {
  const { dispatch } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(person.name);
  const [newEyes, setNewEyes] = useState(person.eyes);
  const [newBirth, setNewBirth] = useState(person.birth);

  const handleEdit = () => {
    setNewName(person.name);
    setNewEyes(person.eyes);
    setNewBirth(person.birth);
    setShowModal(true);
  };

  const handleSave = () => {
    dispatch({
      type: "edit",
      payload: {
        id: person.id,
        name: newName,
        eyes: newEyes,
        birth: newBirth,
      }
    });
    setShowModal(false);
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

      {/* Modal edycji */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edycja osoby</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nazwa</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kolor oczu</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newEyes}
                    onChange={(e) => setNewEyes(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Data urodzenia</label>
                  <input
                    type="date"
                    className="form-control"
                    value={newBirth}
                    onChange={(e) => setNewBirth(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Zamknij</button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>Zapisz zmiany</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonProfile;
