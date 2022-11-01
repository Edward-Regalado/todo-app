import React, { useEffect, useState } from 'react';
import { Container, Wrapper } from './ToDoElements.js';
import useForm from '../../hooks/form.js';
import Form from '../Form';
import List from '../List';

import { useTheme } from '../../context/settings/Theme/ThemeContext';

import { v4 as uuid } from 'uuid';

function ToDo() {

  const darkTheme = useTheme();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function clearAll(){
    document.getElementById('todoForm').reset();
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);
  }

  const themeStyles = {
    backgroundColor: darkTheme ? '#d4d1d1' : '#FFF',
  };

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <Container style={themeStyles}>
      <Wrapper>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} clearAll={clearAll}/>
        <List toggleComplete={toggleComplete} list={list} deleteItem={deleteItem}/>
      </Wrapper>
    </Container>
  );
}

export default ToDo;