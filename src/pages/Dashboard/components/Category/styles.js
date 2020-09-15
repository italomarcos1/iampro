import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: ${({ isSmallScreen }) => (isSmallScreen ? '10px 0' : '10px 5px')};
  background-color: #498;
  margin-right: ${({ index }) => (index === 3 || index === 6 ? '0px' : '20px')};
`;

export const Image = styled.Image`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 105px;
  border-radius: 10px;
`;

export const DarkLayer = styled.View`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 105px;
  height: 105px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 12 : 14)}px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  position: absolute;
  font-family: 'SanFranciscoRegular';
`;
