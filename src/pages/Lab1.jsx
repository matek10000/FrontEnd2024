import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer';
import { data } from '../module-data';
import PersonProfile from '../components/PersonProfile';

const Lab1 = () => {
    const [items, dispatch] = useReducer(AppReducer, data); // useReducer

    return (
        <div>
            <h1>Laboratorium 1</h1>
            {items.map(person => (
                <PersonProfile key={person.id} person={person} dispatch={dispatch} /> // dispatch
            ))}
        </div>
    );
};

export default Lab1;
