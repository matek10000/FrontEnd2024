import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer'; // Importuj reduktor
import { data } from '../module-data'; // Upewnij się, że masz dostęp do danych
import PersonProfile from '../components/PersonProfile'; // Upewnij się, że ścieżka jest poprawna

const Lab1 = () => {
    const [items, dispatch] = useReducer(AppReducer, data); // Zainicjalizuj useReducer

    return (
        <div>
            <h1>Laboratorium 1</h1>
            {items.map(person => (
                <PersonProfile key={person.id} person={person} dispatch={dispatch} /> // Przekaż dispatch
            ))}
        </div>
    );
};

export default Lab1;
