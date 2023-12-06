// LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate loading tasks (replace with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      // Navigate to the 'Thought' screen after loading.
      // Replace 'Thought' with the name of your Thought screen.
      navigation.navigate('Thought');
    }, 3000); // Simulating a 3-second loading time

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Image
        source={require('../assets/favicon.png')} // Replace with the path to your logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.poweredByText}>Powered by Sarvodayam VHSS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 200, // Adjust the width and height based on your logo dimensions
    height: 200,
    marginBottom: 20,
  },
  poweredByText: {
    fontSize: 12,
    color: '#888', // Adjust the color to your preference
  },
});

export default LoadingScreen;
