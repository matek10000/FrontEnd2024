import React from 'react';

const PersonProfile = ({ person }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">ID: {person.id}</p>
                <p className="card-text">Data urodzenia: {person.birth}</p>
                <p className="card-text">Kolor oczu: {person.eyes}</p>
            </div>
        </div>
    );
};

export default PersonProfile;
