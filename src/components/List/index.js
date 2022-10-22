import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { Container } from './ListElements';

function List(props) {
  return (
    <Container>
      {props.list.map(item => (
       <Card key={item.id} aria-label="list-item" style={{ width: '40em', marginBottom: '1em' }}>
              <Card.Body>
                  <Card.Title>
                  <button onClick={() => props.toggleComplete(item.id)}>{item.complete.toString()}</button>
                    <span>{item.assignee}</span>
                  </Card.Title>
                <ListGroup>
                  <ListGroup.Item 
                  variant='primary' 
                  as='li' 
                  className='d-flex justify-content-between align-items-start'
                  >
                    <Badge bg='success' pill>
                    </Badge>
                    <h4>{item.text}</h4>
                    <h4>Difficulty: {item.difficulty}</h4>
                  </ListGroup.Item>
                </ListGroup>
                  <button onClick={() => props.deleteItem(item.id)}>Delete: {item.id}</button>
              </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default List;