import React from 'react';
import { Container } from './FooterElements';
import { useTheme } from '../../context/settings/Theme/ThemeContext';
  

function Footer() {

  const darkTheme = useTheme();
    
  const themeStyles = {
    backgroundImage: darkTheme ? 'linear-gradient(160deg, #000000 0%, #b3b3b3' : 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    color: darkTheme ? '#FFF' : '#333',
  };

  return (
    <Container style={themeStyles}>
        <h2>&copy; ToDo 2020</h2>
    </Container>
  );
}

export default Footer; 