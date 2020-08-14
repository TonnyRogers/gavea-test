import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import { loginRequest } from '../../store/modules/auth/actions';

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
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading } = useSelector((state) => state.auth);

  function handleNavigateToHome() {
    navigation.navigate('Main');
  }

  function handleNavigateSignUp() {
    navigation.navigate('SignUp');
  }

  async function handleSignIn() {
    dispatch(loginRequest(email, password));
  }

  return (
    <Container>
      <Header>
        <Navigation>
          <BackButton testID="login-back-button" onPress={handleNavigateToHome}>
            <Icon name="arrow-back" size={24} color="#FFF" />
          </BackButton>
        </Navigation>
        <PageTitle>Logar</PageTitle>
      </Header>
      <Form>
        <InputBox>
          <Input
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChange={setEmail}
            keyboardType="email-address"
            testID="login-email-input"
          />
        </InputBox>
        <InputBox>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChange={setPassword}
            secureTextEntry
            keyboardType="numeric"
            testID="login-password-input"
          />
        </InputBox>
        <SubmitButton onPress={handleSignIn}>
          {loading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <SubmitButtonText>Entrar</SubmitButtonText>
          )}
        </SubmitButton>
      </Form>
      <SignUpButton onPress={handleNavigateSignUp}>
        <SignUpButtonText>Não sou cadastrado(a)</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignIn;
