import React from 'react';
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
  InputBox,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import Form from '../../components/Form';
import Input from '../../components/Input';

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
        <InputBox>
          <Input label="Nome" placeholder="Digite seu nome" />
        </InputBox>
        <InputBox>
          <Input label="Senha" placeholder="Digite sua senha" />
        </InputBox>
        <SubmitButton>
          <SubmitButtonText>Entrar</SubmitButtonText>
        </SubmitButton>
      </Form>
      <SignUpButton onPress={handleNavigateSignUp}>
        <SignUpButtonText>Não sou cadastrado(a)</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignIn;
