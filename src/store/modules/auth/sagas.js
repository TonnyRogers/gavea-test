import { all, takeLatest, call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '../../../services/api';
import {
  loginRequest,
  loginFailure,
  loginSuccess,
  registerSuccess,
  registerFailure,
} from './actions';

export function* logUser({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    if (!token) {
      Alert.alert('Email ou senha incorreto.');
      yield put(loginFailure());
      return;
    }

    yield call([AsyncStorage, 'setItem'], '@auth:token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token, user));
  } catch (error) {
    Alert.alert('Erro ao efetuar login.');
    yield put(loginFailure());
  }
}

export function* logout() {
  yield call([AsyncStorage, 'removeItem'], '@auth:token');
  api.defaults.headers.Authorization = `Bearer `;
}

export function* registerUser({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });

    const { id } = response.data;

    if (!id) {
      Alert.alert('Dados incorretos.');
      yield put(registerFailure());
      return;
    }

    yield put(registerSuccess(id));
    yield put(loginRequest(email, password));
  } catch (error) {
    Alert.alert('Erro ao efetuar login.');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@auth/LOGOUT', logout),
  takeLatest('@auth/LOGIN_REQUEST', logUser),
  takeLatest('@auth/REGISTER_REQUEST', registerUser),
]);
