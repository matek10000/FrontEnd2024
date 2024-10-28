import React from 'react';
import { Row, Col } from 'react-bootstrap';

function FlexContainer({ element: Element, data, dispatch }) {
    return (
        <Row className="d-flex flex-wrap">
            {data.map(item => (
                <Col key={item.id} md={4} className="mb-3"> {}
                    <Element person={item} dispatch={dispatch} /> {}
                </Col>
            ))}
        </Row>
    );
}

export default FlexContainer;
