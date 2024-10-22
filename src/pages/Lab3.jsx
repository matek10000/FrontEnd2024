import React from 'react';
import FlexContainer from '../components/FlexContainer';
import { Card } from 'react-bootstrap';
import { data } from '../module-data';

const Item = ({ name, id }) => (
  <Card style={{ width: '18rem' }} className="border mb-3 p-3">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);

const Lab3 = () => {
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={data} />
    </div>
  );
};

export default Lab3;