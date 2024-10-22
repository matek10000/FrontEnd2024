import React, { useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppReducer from '../data/AppReducer';

function FlexContainer({ element: Element, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);

  const handleEdit = (id, updates) => {
    dispatch({ type: 'edit', payload: { id, updates } });
  };

  const handleRate = (id, rating) => {
    dispatch({ type: 'rate', payload: { id, rating } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'delete', payload: { id } });
  };

  return (
    <Container>
      <Row>
        {items.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Element 
              {...item} 
              onEdit={(updates) => handleEdit(item.id, updates)} 
              onRate={(rating) => handleRate(item.id, rating)}
              onDelete={() => handleDelete(item.id)} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FlexContainer;
