import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  BackButton,
  Navigation,
  PageTitle,
  SignUpButton,
  SignUpButtonText,
} from './styles';
import Form from '../../components/Form';

const SignIn = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Main');
  }

  function handleNavigateSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      <Header>
        <Navigation>
          <BackButton onPress={handleNavigateToHome}>
            <Icon name="arrow-back" size={24} color="#FFF" />
          </BackButton>
        </Navigation>
        <PageTitle>Logar</PageTitle>
      </Header>
      <Form>
        <Text>Alo</Text>
      </Form>
      <SignUpButton onPress={handleNavigateSignUp}>
        <SignUpButtonText>Não sou cadastrado(a)</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignIn;
