// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME_SCREEN } from '../utils/routesConstants';
import StockScreen from '../screens/stockDataScreen/stockData.screen';

const Stack = createNativeStackNavigator();

const InAppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={StockScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <InAppNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
