import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const { width } = Dimensions.get('window');

const Main = () => {
  const navigation = useNavigation();
  const welcomeCard = useRef(new Animated.Value(-100)).current;

  function handleNavigateSignIn() {
    navigation.navigate('SignIn');
  }

  function handleNavigateSignUp() {
    navigation.navigate('SignUp');
  }

  useEffect(() => {
    Animated.spring(welcomeCard, {
      toValue: 0,
      bounciness: 22,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Container>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: welcomeCard.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, width],
                }),
              },
            ],
            flex: 1,
          },
        ]}
      >
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
      </Animated.View>

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
