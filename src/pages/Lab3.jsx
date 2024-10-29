import React from 'react';
import { Card } from 'react-bootstrap';
import FlexContainer from '../components/FlexContainer';
import PersonProfile from '../components/PersonProfile';

const Item = ({ person }) => (
  <Card style={{ width: '18rem' }} className="border mb-3 p-3">
    <PersonProfile person={person} />
  </Card>
);

const Lab3 = () => (
  <div>
    <h1>Laboratorium 3</h1>
    <FlexContainer element={Item} /> {}
  </div>
);

export default Lab3;
