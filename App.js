// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/LoadingScreen';
import ThoughtScreen from './src/ThoughtScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import HomeScreen from './src/HomeScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }} // Hide header for LoadingScreen
        />
        <Stack.Screen
          name="Thought"
          component={ThoughtScreen}
          options={{ headerShown: false }} // Hide header for ThoughtScreen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // You might want to customize the header for the login screen
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          // You might want to customize the header for the login screen
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // You might want to customize the header for the login screen
          options={{ headerShown: false }}
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
