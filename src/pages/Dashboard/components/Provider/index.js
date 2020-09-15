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
  ProviderService,
  ProviderServicePriceContainer,
  RateContainer,
  Rating,
  TotalRatings,
} from './styles';

import rateHeart from '~/assets/rate-heart.png';
import rateStar from '~/assets/rate-star.png';

export default function Provider({ style, info }) {
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
            <PriceInfo>antes</PriceInfo>
            <Price oldPrice>{` R$ ${info.oldPrice}`}</Price>
            <PriceInfo style={{ color: '#77bf2a' }}> agora</PriceInfo>
            <Price>{` R$ ${info.price}`}</Price>
            <PriceInfo> por hora</PriceInfo>
          </ProviderInfoContent>
        </ProviderInfo>
      </Info>
      <ProviderInfo style={{ paddingLeft: 0, paddingRight: 0, marginTop: 5 }}>
        <ProviderInfoContent>
          <ProviderJob>Promoção</ProviderJob>
        </ProviderInfoContent>
        <ProviderInfoContent>
          <ProviderService>{info.extra}</ProviderService>
          <ProviderServicePriceContainer>
            <ProviderService>antes</ProviderService>
            <Price oldPrice>{` R$ ${info.extraOldPrice}`}</Price>
          </ProviderServicePriceContainer>
        </ProviderInfoContent>
        <ProviderInfoContent>
          <ProviderService>{info.extra2}</ProviderService>
          <ProviderServicePriceContainer>
            <ProviderService style={{ fontSize: 16, color: '#77bf2a' }}>
              agora
            </ProviderService>
            <Price>{` R$ ${info.extraPrice}`}</Price>
          </ProviderServicePriceContainer>
        </ProviderInfoContent>
        <ProviderInfoContent />
      </ProviderInfo>
      <ProviderInfo
        style={{
          marginTop: 10,
          paddingLeft: 0,
          maxHeight: 37,
        }}
      >
        <ProviderInfoContent style={{ justifyContent: 'flex-start' }}>
          <RateContainer style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Rating style={{ fontSize: 12 }}>{info.stars}</Rating>
            <Image source={rateStar} style={{ marginHorizontal: 5 }} />
            <TotalRatings>{`(+${info.starsCount})`}</TotalRatings>
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

Provider.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object]),
  info: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

Provider.defaultProps = {
  style: {},
};
