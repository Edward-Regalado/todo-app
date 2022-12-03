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
    // console.log('addItem: ', list);
    localStorage.setItem('list', JSON.stringify(item));
    // list doesn't work - render empty array 
  }
  
  function clearAll(){
    document.getElementById('todoForm').reset();
  }
  
  function deleteItem(id) {
    // const localStorage = localStorage.getItem('list');
    // const itemFiltered = localStorage.filter(item => item.id === id);
    const itemFiltered = list.filter(item => item.id !== id);
    handleLocalStorage(itemFiltered);

    // localStorage.removeItem('id', id);
    
    // setList(items);
    // const items = list.filter( item => item.id !== id );
    // localStorage.removeItem(items);
  }
  
  function toggleComplete(id) {
    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }
  
  function handleLocalStorage(list){
    localStorage.setItem('list', JSON.stringify(list));
    const data = localStorage.getItem('list');
    if(data === null){
      // setList([]);
      console.log('local storage is empty');
    } else {
      // setList([...list, JSON.parse(data)]);
      setList(JSON.parse(data));
    }
  }
  
  function getFromLocalStorage(){
    const data = localStorage.getItem('list');
    if(data !== null){
      setList(JSON.parse(data));
    }
    // if(data !== null){
      // THIS BREAKS IT ON RELOAD
      // setList(JSON.parse(data));
      // setList([...list, JSON.parse(data)]);
    // } 
  }

  const themeStyles = {
    backgroundColor: darkTheme ? '#d4d1d1' : '#FFF',
  };

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    
    // const data = localStorage.getItem('list');
    // if(data !== null){
    //   setList(JSON.parse(data));
    // }
    // handleLocalStorage();
    getFromLocalStorage();
    document.title = `To Do List: ${incomplete}`;
  }, []);

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