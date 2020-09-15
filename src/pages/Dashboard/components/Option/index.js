import React from 'react';

import PropTypes from 'prop-types';

import { Container, Name, Image } from './styles';

export default function Option({
  color,
  image,
  title,
  containerStyle,
  style,
  width,
  isSmallScreen,
}) {
  return (
    <Container
      style={{
        backgroundColor: color,
        width,
        height: width,
        ...containerStyle,
      }}
    >
      <Image source={image} style={style} />
      <Name isSmallScreen={isSmallScreen}>{title}</Name>
    </Container>
  );
}

Option.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isSmallScreen: PropTypes.bool,
  width: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
  containerStyle: PropTypes.oneOfType([PropTypes.object]),
};

Option.defaultProps = {
  style: {},
  containerStyle: {},
  isSmallScreen: false,
};
