/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

import Main from '../../src/pages/Main';
import SignIn from '../../src/pages/SignIn';
import SignUp from '../../src/pages/SignUp';
import MockedNavigator from '../../jest/MockedNavigator';

jest.mock(
  './path/to/the/image.png',
  () =>
    '/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon.png'
);

describe('Main Page', () => {
  afterEach(cleanup);

  it('when press login button should go to login page', async () => {
    const { findByText, findAllByText } = render(
      <MockedNavigator component={Main} />
    );

    const loginButton = await findByText('Fazer Login');
    fireEvent.press(loginButton);

    const loginPageTitle = await findAllByText('Logar');
    expect(loginPageTitle).toBeTruthy();
  });

  it('on Login page should be possible to return to home page', async () => {
    const { findByTestId, findAllByText } = render(
      <MockedNavigator component={SignIn} />
    );

    const loginBackButton = await findByTestId('login-back-button');
    fireEvent.press(loginBackButton);

    const homePageTitle = await findAllByText('Olá!');
    expect(homePageTitle).toBeTruthy();
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

  it('on Register page should be possible to return to home page', async () => {
    const { findByTestId, findAllByText } = render(
      <MockedNavigator component={SignUp} />
    );

    const loginBackButton = await findByTestId('register-back-button');
    fireEvent.press(loginBackButton);

    const homePageTitle = await findAllByText('Olá!');
    expect(homePageTitle).toBeTruthy();
  });
});
