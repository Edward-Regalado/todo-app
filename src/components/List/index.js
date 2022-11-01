import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { Container, ButtonDelete, ButtonComplete, ButtonFalse } from './ListElements';
import './list.css';

function List(props) {
  return (
    <Container>
      {props.list.map(item => (
       <Card className='list-card' key={item.id} aria-label="list-item" style={{ width: '40em', marginBottom: '1em' }}>
              <Card.Body>
                  <Card.Title className='card-title'>
                  {item.complete === false ? (
                    <ButtonFalse onClick={() => props.toggleComplete(item.id)}>{item.complete.toString()}</ButtonFalse>
                  ) : <ButtonComplete >Complete</ButtonComplete>}
                    <span style={{paddingLeft: '10px'}}>{item.assignee}</span>
                  </Card.Title>
                <ListGroup>
                  <ListGroup.Item
                  className='list-item' 
                  variant='primary' 
                  as='li' 
                  // className='d-flex justify-content-between align-items-start'
                  >
                    <h4>{item.text}</h4>
                    <h4>Difficulty: {item.difficulty}</h4>
                  </ListGroup.Item>
                </ListGroup>
                  {/* <Button onClick={() => props.deleteItem(item.id)}></Button> */}
                  <ButtonDelete onClick={() => props.deleteItem(item.id)}>Delete</ButtonDelete>
              </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default List;