import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, ActivityIndicator } from 'react-native';

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
import { registerRequest } from '../../store/modules/auth/actions';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading } = useSelector((state) => state.auth);

  function handleNavigateToHome() {
    navigation.navigate('Main');
  }

  function handleNavigateSignIn() {
    navigation.navigate('SignIn');
  }

  function handleSubmit() {
    if (!name || !email || !password) {
      Alert.alert('Preencha todos os campos antes de continuar.');
      return;
    }
    dispatch(registerRequest(name, email, password));
    setName('');
    setEmail('');
    setPassword('');
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
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            value={name}
            onChange={setName}
          />
        </InputBox>
        <InputBox>
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={email}
            onChange={setEmail}
          />
        </InputBox>
        <InputBox>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            keyboardType="numeric"
            secureTextEntry
            value={password}
            onChange={setPassword}
          />
        </InputBox>
        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <SubmitButtonText>Salvar</SubmitButtonText>
          )}
        </SubmitButton>
      </Form>
      <SignUpButton onPress={handleNavigateSignIn}>
        <SignUpButtonText>Ja sou cadastrado(a)</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignUp;
