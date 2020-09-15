import React from 'react';

import { Container, Item, Name } from './styles';

import babysitter from '~/assets/babysitter.jpeg';
import barber from '~/assets/barber.jpg';
import dj from '~/assets/dj.jpg';
import dogwalker from '~/assets/dogwalker.jpeg';
import photographer from '~/assets/photographer.jpeg';
import plumber from '~/assets/plumber.jpeg';

export default function Search() {
  return (
    <Container
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Item source={babysitter}>
        <Name>Babysitter</Name>
      </Item>
      <Item source={barber}>
        <Name>Barbeiro</Name>
      </Item>
      <Item source={dj}>
        <Name>DJ</Name>
      </Item>
      <Item source={photographer}>
        <Name>Fotógrafos</Name>
      </Item>
      <Item source={dogwalker}>
        <Name>Dogwalker</Name>
      </Item>
      <Item source={plumber}>
        <Name>Encanadores</Name>
      </Item>
      <Item source={barber}>
        <Name>Barbeiro</Name>
      </Item>
      <Item source={babysitter}>
        <Name>Babysitter</Name>
      </Item>
    </Container>
  );
}
