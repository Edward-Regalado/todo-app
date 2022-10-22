import React from 'react';
import { Container } from './FormElements';
import { Card, Button } from 'react-bootstrap';

function Form(props) {

  return (
    <Container>
       <form
       onSubmit={props.handleSubmit}
       >
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Add To Do Item</Card.Title>
            <Card.Text>To Do Item</Card.Text>
            <input
              type="text"
              name="text"
              placeholder="Add To Do List Item"
              onChange={props.handleChange}
            />
            <Card.Text>Assigned To</Card.Text>
            <input 
            type="text" 
            name="assignee" 
            placeholder="Assigned To" 
            onChange={props.handleChange} 
            />
            <Card.Text>Difficulty Rating</Card.Text>
            <input 
            defaultValue="1" 
            type="range" 
            min="1" 
            max="5" 
            name="difficulty" 
            onChange={props.handleChange}
             />
          </Card.Body>
          <Button type='submit'>Add Item</Button>
        </Card>
        </form>
    </Container>
  );
}

export default Form;