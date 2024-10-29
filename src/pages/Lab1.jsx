import React, { useContext } from 'react'; // Importuj useContext
import { AppContext } from '../data/AppContext'; // Importuj kontekst
import PersonProfile from '../components/PersonProfile';

const Lab1 = () => {
    const { items, dispatch } = useContext(AppContext); // Uzyskaj items i dispatch z kontekstu

    return (
        <div>
            <h1>Laboratorium 1</h1>
            {items.map(person => (
                <PersonProfile key={person.id} person={person} dispatch={dispatch} /> // Przekazuj dispatch
            ))}
        </div>
    );
};

export default Lab1;
