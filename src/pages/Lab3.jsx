import React, { useReducer } from 'react';
import FlexContainer from '../components/FlexContainer';
import { data } from '../module-data'; // module data
import AppReducer from '../data/AppReducer'; // reduktor
import PersonProfile from '../components/PersonProfile'; // PersonProfile
import { Container } from 'react-bootstrap';

const Item = ({ person, dispatch }) => (
    <div className="border p-3">
        <PersonProfile person={person} dispatch={dispatch} /> {}
    </div>
);

const Lab3 = () => {
    const [items, dispatch] = useReducer(AppReducer, data); // useReducer

    return (
        <Container className="mt-4">
            <h1>Laboratorium 3</h1>
            <FlexContainer element={Item} data={items} dispatch={dispatch} /> {}
        </Container>
    );
};

export default Lab3;
