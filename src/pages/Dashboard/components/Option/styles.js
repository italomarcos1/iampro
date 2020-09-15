import styled from 'styled-components';

export const Container = styled.View`
  /* width: 75px;
  height: 75px; */
  border-radius: 8px;
  padding: 5px 10px 10px 5px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 10 : 12)}px;
  margin-top: 3px;
  text-align: left;
  font-family: 'SanFranciscoRegular';
`;

export const Image = styled.Image`
  width: 29px;
  height: 25px;
  align-self: flex-start;
`;
