import React from 'react';
import { data } from '../module-data';
import PersonProfile from '../components/PersonProfile';

const Lab1 = () => {
  // Puste funkcje, aby przyciski były widoczne, ale nieaktywne
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <div>
      <h1>Lab1</h1>
      {data.map(person => (
        <PersonProfile 
          key={person.id} 
          person={person} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default Lab1;
