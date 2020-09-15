import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: #f2f5f5;
`;

export const Header = styled.View`
  background-color: #fff;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  /* background-color: #f00; */
`;

export const TitleContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  /* background-color: #f0f; */
`;

export const Title = styled.View`
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* backgroundColor: '#498', */
`;

export const AvatarContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const SearchContainer = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: #599; */
  justify-content: space-between;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 55px;
  height: 40px;
  border-radius: 4px;
  background-color: #f2f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 10px;
`;

export const OptionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  margin-top: 10px;
  height: 70px;
  align-items: center;
  justify-content: space-between;
`;

export const Banner = styled.View`
  width: 100%;
  height: 100px;
  background-color: #37ccbc;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 10px 10px 15px 15px;
  margin-bottom: 10px;
`;

export const BannerContent = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const BannerTitle = styled.Text`
  text-transform: uppercase;
  align-self: flex-start;
  /* font-weight: bold; */
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 16 : 18)}px;
  text-align: left;
  color: #fff;
  font-family: 'SanFranciscoBold';
`;

export const BannerText = styled.Text`
  /* margin-top: 5px; */
  /* margin-top: 0px; */
  font-size: 17px;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? 15 : 17)}px;
  text-align: left;
  line-height: 22px;
  padding-bottom: 5px;
  color: #fff;
  font-family: 'SanFranciscoRegular';
`;

export const ContentTitle = styled.Text`
  color: #000;
  font-size: 18px;
  /* font-weight: bold; */
  align-self: flex-start;
  text-align: left;
  margin-bottom: 10px;
  padding-left: 5px;
  font-family: 'SanFranciscoBold';
`;

export const ContentWithArrow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Highlights = styled.View`
  margin-top: 20px;
  height: 250px;
  display: flex;
  flex: 1;
  /* background-color: #398; */
`;

export const HighlightsList = styled.FlatList`
  height: 200px;
  display: flex;
`;

export const MostPopular = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 120px;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

export const CategoriesList = styled.FlatList`
  height: 280px;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NearbyList = styled.FlatList`
  height: 460px;
  width: 100%;
  /* background-color: #404; */
  display: flex;
`;
