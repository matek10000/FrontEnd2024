import React, { useReducer } from 'react';
import { data } from '../module-data';
import FlexContainer from '../components/FlexContainer';
import PersonProfile from '../components/PersonProfile';
import AppReducer from '../data/AppReducer';

const Lab3 = () => {
    const [state, dispatch] = useReducer(AppReducer, data);

    const handleEdit = (id) => {
        // logika edycji
        console.log("Edit:", id);
    };

    const handleDelete = (id) => {
        dispatch({ type: 'delete', payload: { id } });
    };

    return (
        <div>
            <h1>Laboratorium 3</h1>
            <FlexContainer
                element={({ ...person }) => (
                    <PersonProfile
                        person={person}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
                data={state}
            />
        </div>
    );
};

export default Lab3;
