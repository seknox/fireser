import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Google from '../accounts/google';
import React from "react";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Google">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Google" component={Google} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
