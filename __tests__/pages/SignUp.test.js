/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import SignUp from '../../src/pages/SignUp';
import MockedNavigator from '../../jest/MockedNavigator';

jest.mock(
  './path/to/the/image.png',
  () =>
    '/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon.png'
);

describe('Register Page', () => {
  afterEach(cleanup);

  const mockStore = configureStore();
  let store;

  it('should be possible to return to home page', async () => {
    const INITIAL_STATE = {
      user: null,
      signed: false,
    };
    store = mockStore(INITIAL_STATE);

    const { findByTestId, findAllByText } = render(
      <Provider store={store}>
        <MockedNavigator component={SignUp} />
      </Provider>
    );

    const loginBackButton = await findByTestId('register-back-button');
    fireEvent.press(loginBackButton);

    const homePageTitle = await findAllByText('Olá!');
    expect(homePageTitle).toBeTruthy();
  });
});
