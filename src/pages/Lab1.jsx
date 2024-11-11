import React, { useContext } from 'react';
import { AppContext } from '../data/AppContext';
import PersonProfile from '../components/PersonProfile';

const Lab1 = () => {
    const { items, dispatch } = useContext(AppContext); // Uzyskanie items i dispatch z kontekstu

    return (
        <div>
            <h1>Laboratorium 1</h1>
            {items.map(person => (
                <PersonProfile key={person.id} person={person} dispatch={dispatch} /> // Przekazanie dispatcha
            ))}
        </div>
    );
};

export default Lab1;
