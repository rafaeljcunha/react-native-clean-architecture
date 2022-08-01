import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CounterMain from './src/Counter/main/CounterMain';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Counter"
          component={CounterMain}
          options={{ headerTitle: 'Contador' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
