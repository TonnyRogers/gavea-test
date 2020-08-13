import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Navigation,
  BackButton,
  PageTitle,
  SignUpButton,
  SignUpButtonText,
} from './styles';
import Form from '../../components/Form';

const SignUp = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Main');
  }

  function handleNavigateSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Header>
        <Navigation>
          <BackButton onPress={handleNavigateToHome}>
            <Icon name="arrow-back" size={24} color="#FFF" />
          </BackButton>
        </Navigation>
        <PageTitle>Cadastre-se</PageTitle>
      </Header>
      <Form>
        <Text>Alo</Text>
      </Form>
      <SignUpButton onPress={handleNavigateSignIn}>
        <SignUpButtonText>Ja sou cadastrado(a)</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignUp;
