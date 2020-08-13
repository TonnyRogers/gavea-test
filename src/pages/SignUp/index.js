import React from 'react';
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
  InputBox,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import Form from '../../components/Form';
import Input from '../../components/Input';

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
          <BackButton
            testID="register-back-button"
            onPress={handleNavigateToHome}
          >
            <Icon name="arrow-back" size={24} color="#FFF" />
          </BackButton>
        </Navigation>
        <PageTitle>Cadastre-se</PageTitle>
      </Header>
      <Form>
        <InputBox>
          <Input label="Nome" placeholder="Digite seu nome" />
        </InputBox>
        <InputBox>
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
          />
        </InputBox>
        <InputBox>
          <Input label="Senha" placeholder="Digite sua senha" />
        </InputBox>
        <SubmitButton>
          <SubmitButtonText>Salvar</SubmitButtonText>
        </SubmitButton>
      </Form>
      <SignUpButton onPress={handleNavigateSignIn}>
        <SignUpButtonText>Ja sou cadastrado(a)</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignUp;
