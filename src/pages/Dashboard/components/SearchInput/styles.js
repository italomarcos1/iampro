import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f5f5;
  height: 40px;
  padding: 5px;
  padding-left: 15px;
  border-radius: 4px;
`;

export const Search = styled.TextInput.attrs({
  placeholderTextColor: '#b1b3b3',
})`
  display: flex;
  flex: 1;
  margin-left: 5px;
  color: #666;
  height: 40px;
  padding: 5px;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 12 : 16)}px;
  font-family: 'SanFranciscoRegular';
`;
