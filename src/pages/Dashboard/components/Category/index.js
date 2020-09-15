import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Name, DarkLayer } from './styles';

export default function Category({ item, width, isSmallScreen }) {
  return (
    <Container index={item.id} style={{ width, height: width }}>
      <Image source={item.image} />
      <DarkLayer />
      <Name isSmallScreen={isSmallScreen}>{item.name}</Name>
    </Container>
  );
}

Category.propTypes = {
  width: PropTypes.number.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
