import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #01caa9;
`;

export const Header = styled.View`
  height: 100px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Welcoming = styled.View``;

export const Message = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 28px;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 16px;
`;

export const LogoutButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.3);
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const BusinessOptions = styled.View`
  background: #fff;
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px 16px;
`;

export const Title = styled.Text`
  color: #5c5dae;
  font-weight: bold;
  font-size: 30px;
  align-self: center;
`;

export const OffersList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  flex: 1;
`;

export const Offer = styled.View`
  background: #f4f4f4;
  height: 70px;
  border-radius: 20px;
  margin: 10px 0;
  justify-content: center;
`;

export const OfferButton = styled(RectButton)`
  background: #fff;
  height: 70px;
  width: 70px;
  border-radius: 20px;
  margin-left: 2px;
  elevation: 4;
  align-items: center;
  justify-content: center;
`;
