import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #01caa9;
`;

export const Header = styled.View`
  flex-direction: column;
  margin: 10px 12px;
`;

export const BackButton = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.2);
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.View``;

export const PageTitle = styled.Text`
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-size: 33px;
`;

export const SignUpButton = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SignUpButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
