import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ProviderInfoContent,
  ProviderJobType,
  ProviderJob,
  Price,
  PriceInfo,
  ProviderServicePriceContainer,
  BottomDetail,
} from './styles';

export default function WithDiscount({ info, width, isSmallScreen }) {
  return (
    <Container index={info.id} style={{ width }}>
      <ProviderInfoContent>
        <ProviderJobType isSmallScreen={isSmallScreen}>
          {info.jobType}
        </ProviderJobType>
      </ProviderInfoContent>

      <ProviderInfoContent>
        <ProviderJob isSmallScreen={isSmallScreen}>{info.job}</ProviderJob>
      </ProviderInfoContent>

      <ProviderInfoContent style={{ marginTop: 5 }}>
        <ProviderServicePriceContainer>
          <PriceInfo isSmallScreen={isSmallScreen}>antes</PriceInfo>
          <Price
            oldPrice
            isSmallScreen={isSmallScreen}
          >{` R$${info.oldPrice}`}</Price>
        </ProviderServicePriceContainer>
        <ProviderServicePriceContainer>
          <PriceInfo isSmallScreen={isSmallScreen} style={{ color: '#77bf2a' }}>
            agora
          </PriceInfo>
          <Price
            isSmallScreen={isSmallScreen}
            style={{ fontSize: 18, marginRight: 2 }}
          >{` R$${info.price}`}</Price>
          <PriceInfo isSmallScreen={isSmallScreen}> por hora</PriceInfo>
        </ProviderServicePriceContainer>
      </ProviderInfoContent>
      <BottomDetail style={{ width }} />
    </Container>
  );
}

WithDiscount.propTypes = {
  width: PropTypes.number.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  info: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
