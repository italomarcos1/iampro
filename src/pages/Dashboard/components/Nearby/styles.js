import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 130px;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #fff;
`;

export const Info = styled.View`
  display: flex;
  width: 100%;
  height: 70px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const ProviderInfo = styled.View`
  display: flex;
  flex: 1;
  height: 66px;
  align-items: flex-start;
  padding: 5px;
  padding-left: 15px;
  justify-content: space-between;
  /* background-color: #0f0f; */
`;

export const ProviderJob = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  font-family: 'SanFranciscoBold';
`;

export const ProviderDistance = styled.Text`
  color: #f69018;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
  font-family: 'SanFranciscoBold';
  margin-left: 10px;
`;

export const ProviderInfoContent = styled.View`
  display: flex;
  width: 100%;
  height: 22px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: #ff0f; */
`;

export const ProviderName = styled.Text`
  color: #6a6a6a;
  font-size: 14px;
  text-align: left;
  font-family: 'SanFranciscoRegular';
`;

export const Price = styled.Text`
  color: ${({ oldPrice }) => (oldPrice ? '#666' : '#77bf2a')};
  font-size: 14px;
  font-family: ${({ oldPrice }) =>
    oldPrice ? 'SanFranciscoRegular' : 'SanFranciscoBold'};

  text-align: left;
  text-decoration-line: ${({ oldPrice }) =>
    oldPrice ? 'line-through' : 'none'};
  /* margin-left: 1px; */
  margin-right: 1px;
`;

export const PriceInfo = styled.Text`
  color: #666;
  font-size: 12px;
  font-family: 'SanFranciscoRegular';
`;

export const RateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  padding: 5px 10px;
  border-radius: 4px;
  height: 25px;
`;

export const Rating = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'SanFranciscoRegular';
`;

export const TotalRatings = styled.Text`
  color: #858585;
  font-size: 12px;
  font-family: 'SanFranciscoRegular';
`;
