import React from 'react';
import { Container,LightButton, DarkButton } from './NavElements';
import { TbNotes } from 'react-icons/tb';
import { useTheme, useThemeUpdate } from '../../context/settings/Theme/ThemeContext';

function Header() {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();


  const themeStyles = {
    backgroundImage: darkTheme ? 'linear-gradient(160deg, #000000 0%, #b3b3b3' : 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    color: darkTheme ? '#FFF' : '#333',
  };

  const logoStyle = {
    fontSize: '3rem',
    textAlign: 'center'
  };

  return (
    <Container style={themeStyles}>
      {darkTheme ? <DarkButton onClick={toggleTheme}>Light</DarkButton> : <LightButton onClick={toggleTheme}>Dark</LightButton> }
      <h2>ToDo App</h2>
      <TbNotes style={logoStyle}/>
    </Container>
  );
}

export default Header;