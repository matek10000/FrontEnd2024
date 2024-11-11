import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../module-data.js';

function Lab2() {
    const { id } = useParams();
    const person = data.find(p => p.id.toString() === id); // Wyszukanie osoby po id

    if (!id) {
        return <h1>Brak identyfikatora osoby.</h1>;
    }

    if (!person) {
        return <h1>Nie znaleziono osoby o tym identyfikatorze.</h1>;
    }

    return (
        <div>
            <h1>Profil osoby</h1>
            <p>Imie: {person.name}</p>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
        </div>
    );
}

export default Lab2;
