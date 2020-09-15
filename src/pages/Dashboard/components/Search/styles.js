import styled from 'styled-components';

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  padding: 10px;
`;

export const Item = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'SanFranciscoRegular';
`;
