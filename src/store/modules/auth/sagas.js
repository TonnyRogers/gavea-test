import { all, takeLatest, call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { loginFailure, loginSuccess } from './actions';

export function* logUser({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    if (!token) {
      Alert.alert('Email ou senha incorreto.');
      yield put(loginFailure());
      return;
    }

    yield call([AsyncStorage, 'setItem'], '@Omni:token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token, user));
  } catch (error) {
    Alert.alert('Erro ao efetuar login.');
    yield put(loginFailure());
  }
}

export default all([takeLatest('@auth/LOGIN_REQUEST', logUser)]);
