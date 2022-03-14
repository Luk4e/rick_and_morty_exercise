import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { ISingelElemntProps } from '../interfaces/apiInterfaces';

const ListElement = ({ personage, handleShow, handlePersonage}: ISingelElemntProps):JSX.Element => {
  // component for showing one list element

  return(
    <Row className="justify-content-center">
      <Col xs={8} md={3}>
        <ListGroup.Item
          style={{ cursor:'pointer' }}
          onClick={() => {handleShow(true); handlePersonage(personage)}}
        >
          {personage.name}
        </ListGroup.Item>
      </Col>
    </Row>
  )
};

export default ListElement;
