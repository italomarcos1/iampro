import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Info,
  Avatar,
  ProviderInfo,
  ProviderName,
  ProviderInfoContent,
  ProviderDistance,
  ProviderJob,
  Price,
  PriceInfo,
  RateContainer,
  Rating,
  TotalRatings,
} from './styles';

import rateHeart from '~/assets/rate-heart.png';
import rateStar from '~/assets/rate-star.png';

export default function Nearby({ style, info }) {
  return (
    <Container style={style}>
      <Info>
        <Avatar source={info.avatar} />
        <ProviderInfo>
          <ProviderInfoContent style={{ justifyContent: 'flex-start' }}>
            <ProviderJob>{info.job}</ProviderJob>
            <ProviderDistance>{`${info.distance} Km`}</ProviderDistance>
          </ProviderInfoContent>
          <ProviderInfoContent>
            <ProviderName>{info.name}</ProviderName>
          </ProviderInfoContent>
          <ProviderInfoContent style={{ justifyContent: 'flex-start' }}>
            <PriceInfo style={{ marginRight: 1 }}>antes</PriceInfo>
            <Price oldPrice>{` R$ ${info.oldPrice}`}</Price>
            <PriceInfo style={{ marginLeft: 2, color: '#77bf2a' }}>
              agora
            </PriceInfo>
            <Price>{` R$ ${info.price}`}</Price>
            <PriceInfo> por hora</PriceInfo>
          </ProviderInfoContent>
        </ProviderInfo>
      </Info>
      <ProviderInfo
        style={{
          marginTop: 10,
          paddingLeft: 0,
          maxHeight: 33,
        }}
      >
        <ProviderInfoContent style={{ justifyContent: 'flex-start' }}>
          <RateContainer>
            <Rating style={{ fontSize: 12 }}>{info.stars}</Rating>
            <Image source={rateStar} style={{ marginHorizontal: 5 }} />
            <TotalRatings>{`(${info.starsCount})`}</TotalRatings>
          </RateContainer>
          <RateContainer
            style={{ marginLeft: 10, paddingLeft: 5, paddingRight: 5 }}
          >
            <Image source={rateHeart} style={{ marginHorizontal: 5 }} />
            <TotalRatings style={{ fontSize: 11 }}>({info.likes})</TotalRatings>
          </RateContainer>
        </ProviderInfoContent>
      </ProviderInfo>
    </Container>
  );
}

Nearby.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object]),
  info: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

Nearby.defaultProps = {
  style: {},
};
