import React,  { useState } from 'react';
import { Container, ButtonWrapper, SelectContainer } from './FormElements';
import { Card, Button } from 'react-bootstrap';

function FormOptions(props) {

  return (
    <Container>
       <form
       id='todoForm'
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
          <ButtonWrapper>
            <Button type='submit'>Add Item</Button>
            <Button onClick={props.clearAll}>Clear</Button>
          </ButtonWrapper>
        </Card>
        </form>
    </Container>
  );
}

export default FormOptions;