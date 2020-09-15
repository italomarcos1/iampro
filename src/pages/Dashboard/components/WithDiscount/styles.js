import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 160px;
  height: 150px;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-right: ${({ index }) => (index % 2 === 0 ? '0px' : '10px')};
`;

export const ProviderInfoContent = styled.View`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const ProviderJobType = styled.Text`
  color: #f69018;
  margin-top: 10px;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 12 : 14)}px;
  align-self: flex-start;
  font-family: 'SanFranciscoBold';
`;

export const ProviderJob = styled.Text`
  color: #000;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 14 : 16)}px;
  align-self: flex-start;
  font-family: 'SanFranciscoBold';
`;

export const ProviderServicePriceContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const Price = styled.Text`
  color: ${({ oldPrice }) => (oldPrice ? '#666' : '#77bf2a')};
  font-weight: ${({ oldPrice }) => (oldPrice ? 'normal' : 'bold')};
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 12 : 14)}px;
  align-items: center;
  font-family: ${({ oldPrice }) =>
    oldPrice ? 'SanFranciscoRegular' : 'SanFranciscoBold'};
  text-decoration-line: ${({ oldPrice }) =>
    oldPrice ? 'line-through' : 'none'};
`;

export const PriceInfo = styled.Text`
  color: #666;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 10 : 12)}px;
  font-family: 'SanFranciscoRegular';
`;

export const BottomDetail = styled.View`
  width: 160px;
  height: 20px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #77bf2a;
  margin-top: 10px;
`;
