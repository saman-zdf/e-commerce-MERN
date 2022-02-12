import React from 'react';

import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
} from '../style/Navbar';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer></SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
