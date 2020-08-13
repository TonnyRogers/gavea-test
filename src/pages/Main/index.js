import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  WelcomeCard,
  Header,
  Title,
  Content,
  PromoTitle,
  Hero,
  HeroImage,
  HeroText,
  LoginButton,
  LoginButtonText,
  SignUpButton,
  SignUpButtonText,
} from './styles';

import moneyImage from '../../assets/images/money-banner-img.png';

const Main = () => {
  const navigation = useNavigation();

  function handleNavigateSignIn() {
    navigation.navigate('SignIn');
  }

  function handleNavigateSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      <WelcomeCard>
        <Header>
          <Title>Olá!</Title>
        </Header>
        <Content>
          <PromoTitle>Chegou a hora de fazer grandes negócios</PromoTitle>
          <Hero>
            <HeroImage source={moneyImage} />
            <HeroText>Faça login ou cadastre-se para começar</HeroText>
          </Hero>
        </Content>
      </WelcomeCard>

      <LoginButton onPress={handleNavigateSignIn}>
        <LoginButtonText>Fazer Login</LoginButtonText>
      </LoginButton>

      <SignUpButton onPress={handleNavigateSignUp}>
        <SignUpButtonText>Não sou cadastrado(a)</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default Main;
