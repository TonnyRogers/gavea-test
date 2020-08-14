/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import Main from '../../src/pages/Main';
import MockedNavigator from '../../jest/MockedNavigator';

jest.mock(
  './path/to/the/image.png',
  () =>
    '/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon.png'
);

describe('Main Page', () => {
  afterEach(cleanup);

  const mockStore = configureStore();
  let store;

  it('when press login button should go to login page', async () => {
    const INITIAL_STATE = {
      user: null,
      signed: false,
    };
    store = mockStore(INITIAL_STATE);

    const { findByText, findAllByText } = render(
      <Provider store={store}>
        <MockedNavigator component={Main} />
      </Provider>
    );

    const loginButton = await findByText('Fazer Login');
    fireEvent.press(loginButton);

    const loginPageTitle = await findAllByText('Logar');
    expect(loginPageTitle).toBeTruthy();
  });

  it('when press register button should go to register page', async () => {
    const { findByText, findAllByText } = render(
      <MockedNavigator component={Main} />
    );

    const loginButton = await findByText('Não sou cadastrado(a)');
    fireEvent.press(loginButton);

    const loginPageTitle = await findAllByText('Cadastre-se');
    expect(loginPageTitle).toBeTruthy();
  });
});
