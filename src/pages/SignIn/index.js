import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNavigateToHome() {
    navigation.navigate('Main');
  }

  function handleNavigateSignUp() {
    navigation.navigate('SignUp');
  }

  async function handleSignIn() {
    try {
      const response = await api.post('/sessions', { email, password });
      const { token } = response.data;

      if (token) {
        navigation.navigate('Dashboard', { data: response.data.user });
      } else {
        Alert.alert('Email, ou senha incorreto.');
      }
    } catch (error) {
      Alert.alert('Erro ao efetuar Login');
    }
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
          />
        </InputBox>
        <InputBox>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChange={setPassword}
            secureTextEntry
          />
        </InputBox>
        <SubmitButton onPress={handleSignIn}>
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
