import React from 'react';
import { Row, Col } from 'react-bootstrap';

function FlexContainer({ element: Element, data, dispatch }) {
    return (
        <Row className="d-flex flex-wrap">
            {data.map(item => (
                <Col key={item.id} md={4} className="mb-3"> {/* Użyj kolumny Bootstrap dla responsywności */}
                    <Element person={item} dispatch={dispatch} /> {/* Przekaż dispatch do elementu */}
                </Col>
            ))}
        </Row>
    );
}

export default FlexContainer;
