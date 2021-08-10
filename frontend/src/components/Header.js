import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#A2D9CE',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo
          alt={props.title}
          style={{ maxWidth: '5rem', maxHeight: '5rem' }}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
