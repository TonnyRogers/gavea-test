import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../src/pages/Main';
import Dashboard from '../src/pages/Dashboard';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';

const Stack = createStackNavigator();

const MockedNavigator = ({ component, params = {} }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{}} />
        <Stack.Screen name="Main" component={Main} options={{}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
