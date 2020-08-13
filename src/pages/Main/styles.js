import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const WelcomeCard = styled.View`
  background: #eee;
  border-radius: 20px;
  width: 330px;
  flex: 1;
  margin: 40px 12px 20px;
  elevation: 4;
`;

export const Header = styled.View`
  background: #01caa9;
  height: 75px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 33px;
`;

export const Content = styled.View`
  padding: 0 10px;
`;

export const PromoTitle = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  font-size: 33px;
`;

export const Hero = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

export const HeroImage = styled.Image`
  height: 180px;
  width: 180px;
`;

export const HeroText = styled.Text`
  flex: 1;
  color: #3f40bd;
  font-weight: bold;
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  align-self: stretch;
  background: #01caa9;
  border-radius: 8px;
  height: 53px;
  margin: 0 12px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const SignUpButton = styled.TouchableOpacity`
  align-self: stretch;
  background: transparent;
  border-radius: 8px;
  height: 53px;
  margin: 0 12px;
  align-items: center;
  justify-content: center;
`;

export const SignUpButtonText = styled.Text`
  color: #34ae9a;
  font-weight: bold;
  font-size: 14px;
`;
