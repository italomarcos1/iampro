import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Search } from './styles';

export default function SearchInput({ isSmallScreen }) {
  return (
    <Container>
      <Icon name="search" size={20} color="#b1b3b3" />
      <Search
        placeholder="Reparação de Eletrodomésticos"
        isSmallScreen={isSmallScreen}
      />
    </Container>
  );
}

SearchInput.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
