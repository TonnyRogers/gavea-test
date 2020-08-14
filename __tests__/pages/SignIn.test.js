/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import * as redux from 'react-redux';

import configureStore from 'redux-mock-store';

import SignIn from '../../src/pages/SignIn';
import MockedNavigator from '../../jest/MockedNavigator';

const { Provider } = redux;

jest.mock(
  './path/to/the/image.png',
  () =>
    '/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon.png'
);

jest.mock('axios');

const spyUseSelector = jest.spyOn(redux, 'useSelector');

describe('Login Page', () => {
  afterEach(cleanup);

  const mockStore = configureStore();
  let store;

  it('on Login page should be possible to return to home page', async () => {
    const INITIAL_STATE = {
      user: null,
      signed: false,
    };

    store = mockStore(INITIAL_STATE);

    spyUseSelector.mockReturnValue({ loading: false });

    const { findByTestId, findAllByText } = render(
      <Provider store={store}>
        <MockedNavigator component={SignIn} />
      </Provider>
    );

    const loginBackButton = await findByTestId('login-back-button');
    fireEvent.press(loginBackButton);

    const homePageTitle = await findAllByText('Olá!');
    expect(homePageTitle).toBeTruthy();
  });
});
