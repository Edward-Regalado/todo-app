import React from 'react';
import '../../assets/styles/nav.css';
import 'antd/dist/antd.css';

import { Container, ButtonContainer, LogoContainer, LoginButton } from './NavElements';
import { TbNotes } from 'react-icons/tb';
import { Switch } from 'antd';
import { useTheme, useThemeUpdate } from '../../context/settings/Theme/ThemeContext';

function Header() {

  // const [toggle, setToggle ] = useState(false);

  // const toggler = () => {
  //   toggle ? setToggle(false) : setToggle(true);
  // };

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();


  const themeStyles = {
    backgroundImage: darkTheme ? 'linear-gradient(160deg, #000000 0%, #b3b3b3' : 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    color: darkTheme ? '#fff' : '#333',
  };

  const toggleDark = {
    backgroundColor: 'black',
    color: 'black',
  };

  const toggleLight = {
    backgroundColor: 'gray',
    color: 'black',
  };

  return (
    <Container style={themeStyles}>
      <ButtonContainer>
      {darkTheme ? <Switch className='toggle' style={toggleDark} onClick={toggleTheme} checkedChildren='light' unCheckedChildren='dark'/> : <Switch className='toggle' style={toggleLight} onClick={toggleTheme} checkedChildren='light' unCheckedChildren='dark'/>}
      </ButtonContainer>
  
      <LogoContainer>
          <span>ToDo App</span>
        <TbNotes />
      </LogoContainer>
      <LoginButton>Login</LoginButton>
    </Container>
  );
}

export default Header;